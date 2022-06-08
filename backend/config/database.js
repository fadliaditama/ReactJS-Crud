import { Sequelize } from "sequelize";

const db = new Sequelize('db_kemenkeu', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;