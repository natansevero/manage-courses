const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const cursoSchema = new Schema({
        nome: { type: String, required: true },
        tipo: { type: String, required: true, enum: ['frontend', 'backend', 'mobile', 'devops'] }
    })
    

    return mongoose.model('cursos', cursoSchema)
}