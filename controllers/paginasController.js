//importamos el modelo de viajes
import { Viaje } from "../models/Viaje.js";
//importamos el modelo de testimoniales
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    const pagina = "Inicio"; // Creamos una variable que contiene un string
    const clase = "home"; // Creamos una variable que contiene un string

    //Consultar 3 viajes del modelo viaje

    const promiseDB = []; // Creamos un array vacio

    promiseDB.push(Viaje.findAll({ limit: 3 })); // Agregamos una promesa a nuestro array
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        const resultado = await Promise.all(promiseDB); // Esperamos a que se ejecuten todas las promesas que estan en nuestro array y guardamos el resultado en un array

        res.render("inicio", {
            pagina, // Pasamos la variable a la vista como objeto
            clase,
            viajes: resultado[0], // Pasamos el resultado de la consulta a la vista como objeto
            testimoniales: resultado[1]
        });
    }catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => {
    const pagina = "Nosotros"; 

    res.render("nosotros", {
        pagina,
    });
};

const paginaViajes = async (req, res) => {
    //consultar la base de datos
    const viajes = await Viaje.findAll();    
    const pagina = "Próximos Viajes"; 

    res.render("viajes", {
        pagina,
        viajes
    });
};

//Mustra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const pagina = "Información Viaje";
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }}); 

        res.render("viajesDetalle", {
            pagina,
            viaje
        });
    } catch (error) {
        console.log(error);  
    }
};

const paginaTestimoniales = async (req, res) => {

    try {
        const pagina = "Testimoniales";
        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales", {
        pagina,
        testimoniales
    });
    }catch (error) {
        console.log(error);
    }
};


export { 
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
};