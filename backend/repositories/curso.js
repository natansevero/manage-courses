module.exports = app => {
    let Curso = app.models.curso

    let repository = {
        create: async data => {
            let curso = new Curso(data)
            await curso.save()
        },

        getAll: async () => {
            return await Curso.find({})
        },
        
        getOneByNome: async nome => {
            return await Curso.findOne({
                nome
            })
        },

        update: async (id, data) => {
            return await Curso.findByIdAndUpdate(id, {
                $set: {
                    nome: data.nome
                }
            })
        },

        delete: async id => {
            return await Curso.findOneAndRemove(id)
        }
    }

    return repository
}