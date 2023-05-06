//importar sequelize
import { Sequelize }  from "sequelize";
//importar db
import db from "../config/db.js";

//Definimos el modelo

export const Testimonial = db.define('testimoniales', {
    nombre: Sequelize.STRING,
    correo: Sequelize.STRING,
    mensaje: Sequelize.STRING 
})