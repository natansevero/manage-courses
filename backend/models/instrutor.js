const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const instrutorSchema = new Schema({
        nome: { type: String, required: true },
        data_nasc: { type: String, required: true }
    })

    return mongoose.model('instrutores', instrutorSchema)
}