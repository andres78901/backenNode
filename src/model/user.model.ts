import { sequelize, Model, DataTypes } from "../config/configBD";

class Users extends Model {}
Users.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_number_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

class Passwd extends Model {}
Passwd.init(
  {
    passwd_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "passwd" }
);
export { Users, Passwd };
