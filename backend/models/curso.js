const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const cursoSchema = new Schema({
        nome: { type: String, required: true }
    })
    

    return mongoose.model('cursos', cursoSchema)
}