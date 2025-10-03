import { DataTypes, Model } from "sequelize";
import { sequelize } from './sequelize.client.js';


export class UserBook extends Model { }


UserBook.init({
   toRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false
   }
}, {
   sequelize,
   tableName: 'userbooks',
   underscored: true
});

