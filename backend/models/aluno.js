const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const alunoSchema = new Schema({
        nome: { type: String, required: true, index: true },
        data_nasc: { type: String, required: true },
        matricula: { type: String, requried: true, unique: true }
    })

    return mongoose.model('alunos', alunoSchema)
}