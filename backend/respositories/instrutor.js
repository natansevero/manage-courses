module.exports = app => {
    let Instrutor = app.models.Instrutor

    let repository = {
        create: async data => {
            let instrutor = new Instrutor(data)
            await instrutor.save()
        },

        getAll: async () => {
            return await Instrutor.find({})
        },

        getOneByNome: async nome => {
            return await Instrutor.findOne({
                nome
            })
        },

        update: async (id, data) => {
            return await Instrutor.findByIdAndUpdate(id, {
                $set: {
                    nome: data.nome,
                    data_nasc: data.data_nasc
                }
            })
        },

        delete: async id => {
            return await Instrutor.findOneAndRemove(id)
        }
    }

    return repository
}