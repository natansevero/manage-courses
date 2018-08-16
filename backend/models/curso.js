const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const cursoSchema = new Schema({
        nome: { type: String, required: true, index: true },
        create_at: { type: Date, default: Date.now }
    })
    

    return mongoose.model('cursos', cursoSchema)
}