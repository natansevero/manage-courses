module.exports = app => {
    const Instrutor = app.models.instrutor

    let repository = {
        create: async data => {
            let instrutor = new Instrutor(data)
            await instrutor.save()
        },

        getAll: async () => {
            return await Instrutor.find({})
        },

        getByNome: async nome => {
            let regexp = new RegExp(`^${nome}`, 'i')
            return await Instrutor.find({
                nome: {
                    $regex: regexp
                }
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
            return await Instrutor.findByIdAndRemove(id)
        }
    }

    return repository
}