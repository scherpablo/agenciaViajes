//Importamos el modelo de testimoniales
import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    const pagina = "Testimoniales"; 
    //Validar formulario
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (!nombre || !correo || !mensaje) {
        errores.push({ mensaje: "Todos los campos son obligatorios" 
        });
    }else if (nombre.length < 3) {
        errores.push({ mensaje: "El nombre es muy corto" });
    }
    //Enviar el mensaje de error a la vista de testimoniales
    if (errores.length > 0) {
        // Consultar los testimoniales
        const testimoniales = await Testimonial.findAll();
        //Mostrar la vista de testimoniales
        res.render("testimoniales", {
            pagina,
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else {
        //Almacenarlo en la base de datos        
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect("/testimoniales");
        }catch (error) {
            console.log(error);
            
        }
    }
}

export {
    guardarTestimonial
}