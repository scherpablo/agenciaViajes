//importamos el modelo de viajes
import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    const pagina = "Inicio"; // Creamos una variable que contiene un string
    res.render("inicio", {
        pagina: pagina, // Pasamos la variable a la vista como objeto
    });
};

const paginaNosotros = (req, res) => {
    const pagina = "Nosotros"; 
    res.render("nosotros", {
        pagina: pagina,
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

const paginaTestimoniales = (req, res) => {
    const pagina = "Testimoniales"; 
    res.render("testimoniales", {
        pagina: pagina,
    });
};


export { 
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
};