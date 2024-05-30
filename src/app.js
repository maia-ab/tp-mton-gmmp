const express = require('express')
const db = require('./db/models')
const carrerasRoute = require('./routes/carreras.route')
const materiaRoute = require('./routes/materia.route')
//const profesoresRoute = require('./routes/profesores.route')
//const cursosRoute = require('./routes/cursos.route')

const app = express();
app.use(express.json())
app.use(carrerasRoute)
app.use(materiaRoute)
//app.use(carrerasRoute)
//app.use(carrerasRoute)



app.listen(3000, async ()=>{
console.log(`La aplicacion arranco correctamente en el puerto 3000`);
    try{
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true})
        const carrera = await db.Carreras.create({
            nombre: 'Cosme Fulanito',
            grado: 'AAAAAAA',
            universidad: 'Unahur'
        })
        const materia1 = await db.Materia.create({
            nombre: 'Matematica',
            cuatrimestral: true,
            anio: 1
        })
        const materia2 = await db.Materia.create({
            nombre: 'Literatura',
            cuatrimestral: false,
            anio: 2
        })
    }catch(err){
        console.log(err)
    }
})