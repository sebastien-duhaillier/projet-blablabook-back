import argon2 from "argon2";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { loginSchema } from "../schemas/login.schema.js";
import { registerSchema } from "../schemas/register.schema.js";


export const userAuthentificationController = {
  async register(req, res) {
    try {
      const { name, email, password, firstname } = Joi.attempt(req.body, registerSchema);

      const isUserExists = await User.findOne({
        where: { email }
      });

      if (isUserExists) {
        return res.status(409).json({ error: "User already exists" });
      }

      const hashedPassword = await argon2.hash(password);

      const newUser = await User.create({
        name,
        email,
        firstname,
        password: hashedPassword,
        // role_id: userRole.id // si tu veux ajouter le rôle plus tard
      });

      res.status(201).json({ message: "Compte créé", name: newUser.name });
    } catch (error) {
      console.error("Erreur register :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = Joi.attempt(req.body, loginSchema);

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ error: "User does not exist" });
      }

      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return res.status(403).json({ error: "Password is incorrect" });
      }

      const token = jwt.sign(
        {
          email: user.email,
          id: user.id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Utilisateur connecté", token });
    } catch (error) {
      console.error("Erreur login :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  async getMe(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.user.email },
        attributes: ["name", "email", "firstname"]
      });

      if (!user) {
        return res.status(404).json({ error: "User does not exist" });
      }

      res.status(200).json(user);

    } catch (error) {
      console.error("Erreur getMe :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};
