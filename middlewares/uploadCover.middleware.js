import multer from 'multer';
import path from 'path';





// Définir le stockage
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'uploads/'); // dossier où les fichiers seront enregistrés
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
   }
});

// Filtrage des types de fichiers
const fileFilter = (req, file, cb) => {
   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
   if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
   } else {
      cb(new Error('Type de fichier non autorisé'));
   }
};

// Création du middleware
const upload = multer({ storage, fileFilter });
export default upload;


//  Ce fichier pourrait-il nous servir également pour gérer les avatars des users ?