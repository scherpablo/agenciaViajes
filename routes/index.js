//importamos express
import express from "express";
//importamos el controlador de paginas
import { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales } from "../controllers/paginasController.js"; 
//importamos el controlador de testimoniales
import { guardarTestimonial} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio); //mostramos la pagina inicio en la vista 

router.get("/nosotros", paginaNosotros); //mostramos la pagina nosotros en la vista

router.get("/viajes", paginaViajes); //mostramos la pagina viajes en la vista
router.get("/viajes/:slug", paginaDetalleViaje); //mostramos la pagina viajes en la vista

router.get("/testimoniales", paginaTestimoniales); //mostramos la pagina testimoniales en la vista
router.post("/testimoniales", guardarTestimonial); //enviamos los datos del testimonial

export default router;
