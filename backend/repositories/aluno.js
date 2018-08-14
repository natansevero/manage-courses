module.exports = app => {
    const Aluno = app.models.aluno;

    let repository = {
        create: async data => {
            let aluno = new Aluno(data)
            await aluno.save()
        },
        
        getAll: async () => {
            return await Aluno.find({})
        },

        getByNome: async nome => {
            let regexp = new RegExp(`^${nome}`, 'i')
            return await Aluno.find({
                nome: {
                    $regex: regexp
                }
            })
        },

        update: async (id, data) => {
            return await Aluno.findByIdAndUpdate(id, {
                $set: {
                    nome: data.nome,
                    data_nasc: data.data_nasc
                }
            })
        },

        delete: async id => {
            return await Aluno.findOneAndRemove(id)
        }
    }

    return repository;
}