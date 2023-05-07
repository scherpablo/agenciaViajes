import { Sequelize }  from "sequelize";
import dotenv from 'dotenv'; //para poder leer las variables de entorno

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME || "turismo_viajes",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "", {
    host: process.env.DB_HOST || "localhost",
    port: process.env.PORT || '3306',
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