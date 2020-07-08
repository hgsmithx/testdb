const express = require('express');
const app = express()
const ruta = require('./Routes/appRoute');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rutas
app.use('/api', ruta )



app.listen(3000,()=>{
    console.log("corriendo en el puerto 3000");
});