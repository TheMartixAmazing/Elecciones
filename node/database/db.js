import { Sequelize } from "sequelize";

const db = new Sequelize('App', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;