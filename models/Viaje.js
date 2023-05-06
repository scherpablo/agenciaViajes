//importar sequelize
import { Sequelize }  from "sequelize";
//importar db
import db from "../config/db.js";

//definimos el modelo
export const Viaje = db.define('viajes', {
    titulo: Sequelize.STRING,
    precio: Sequelize.STRING,
    fecha_ida: Sequelize.DATE,
    fecha_vuelta: Sequelize.DATE,
    imagen: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    disponibles: Sequelize.STRING,
    slug: Sequelize.STRING
} );