module.exports = app => {
    const Curso = app.models.curso

    let repository = {
        create: async data => {
            let curso = new Curso(data)
            await curso.save()
        },

        getAll: async () => {
            return await Curso.find({})
        },
        
        getByNome: async nome => {
            let regexp = new RegExp(`^${nome}`, 'i')
            return await Curso.find({
                nome: {
                    $regex: regexp
                }
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
            return await Curso.findByIdAndRemove(id)
        }
    }

    return repository
}