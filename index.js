//const express = require('express'); //SINTAXIS DE COMMON JS (ANTIGUA)

import express from 'express'; //SINTAXIS DE ECMASCRIPT (ES6) 
import router  from './routes/index.js'; //importamos el archivo index.js de la carpeta routes
import db from './config/db.js'; // importamos la conexion a la base de datos

const app = express();

//Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Definir Puerto
const port = process.env.PORT || 4000;  

//Habilitamos PUG
app.set('view engine', 'pug');

//Middlewares para obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    const nombreSitio = 'Agencia de Viajes';
    res.locals.actualYear = year.getFullYear();
    res.locals.tituloSitio = nombreSitio;
    next();
})

//Agreamos body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definimos la carpeta publica
app.use(express.static('public'));

//Agregamos el router
app.use(router);

//Escuchamos el puerto
app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
});



