const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = app => {

    const turmaSchema = new Schema({
        nome: { type: String, required: true },
        alunos: [{ 
            type: Schema.Types.ObjectId,
            ref: 'alunos' 
        }],
        cursos: [{
            curso: { 
                type: Schema.Types.ObjectId,
                ref: 'cursos'
            },
            instrutor: {
                type: Schema.Types.ObjectId,
                ref: 'instrutores'
            }
        }]
    })

    return mongoose.model('turmas', turmaSchema)
}