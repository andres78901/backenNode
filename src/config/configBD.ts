import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("test", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export { sequelize, Model, DataTypes };
