import { Sequelize }  from "sequelize";
import dotenv from 'dotenv'; //para poder leer las variables de entorno

dotenv.config();

const db = new Sequelize(
    process.env.MYSQLDATABASE || "turismo_viajes",
    process.env.MYSQLUSER || "root",
    process.env.MYSQLPASSWORD || "", {
    host: process.env.MYSQLHOST || "localhost",
    port: process.env.MYSQLPORT || '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }, 
    // operatorsAliases: false
});

export default db;