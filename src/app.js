const express = require('express')
require('dotenv').config();
const db = require('./db/models')
const carrerasRoute = require('./routes/carreras.route')
const materiaRoute = require('./routes/materia.route')
const profesoresRoute = require('./routes/profesores.route')
const cursosRoute = require('./routes/cursos.route')

const app = express();

app.use(express.json())
app.use(carrerasRoute)
app.use(materiaRoute)
app.use(profesoresRoute)
app.use(cursosRoute)

const PORT = process.env.NODE_LOCAL_PORT;

app.listen(PORT, async ()=>{
console.log(`La aplicacion arranco correctamente en el puerto ${PORT}`);
    try{
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true})

    }catch(err){
        console.log(err)
    }
})