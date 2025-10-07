import { DataTypes, Model } from "sequelize";
import { sequelize } from './sequelize.client.js';


export class UserBook extends Model { }


UserBook.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  toRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    // Prévoir potentiel ajout d'une valeur par défaut
  }
}, {
  sequelize,
  tableName: 'userbooks',
  underscored: true
});

