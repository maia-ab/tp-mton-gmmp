const express = require('express')
const db = require('./db/models')


const app = express();
app.use(express.json())


app.listen(3000, async ()=>{
console.log(`La aplicacion arranco correctamente en el puerto 3000`);
    try{
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true})
        const curso = await db.Cursos.create({
            comision: 'Comision 1',
            turno: 'Noche',
            fechaInicio: new Date('10-01-2024'),
            fechaFin: new Date('06-03-2024')
        })
    }catch(err){
        console.log(err)
    }
})