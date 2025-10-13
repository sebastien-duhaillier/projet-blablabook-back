import { DataTypes, Model } from "sequelize";
import { sequelize } from './sequelize.client.js';


export class Book extends Model { }


Book.init({

   title: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   release_date: {
      type: DataTypes.DATE,
      allowNull: true
   },
   cover: {

      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
         len: [0, 255],
      }
   },
   synopsis: {
      type: DataTypes.STRING(800),
      allowNull: false
   }
}, {
   sequelize,
   tableName: 'books',
   underscored: true
});

