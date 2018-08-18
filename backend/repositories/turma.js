module.exports = app => {
    const Turma = app.models.turma

    let repository = {
        create: async data => {
            let turma = new Turma(data)
            await turma.save()
        },

        get: async (query) => {
            let find = {}
            query.hasOwnProperty('nome') ? find['nome'] = query.nome : find = {}

            delete query['nome']
            let queryToWhere = query

            return await Turma.find(find)
                .populate('alunos', 'nome')
                .populate('cursos.curso', 'nome')    
                .populate('cursos.instrutor', 'nome')
                .where(queryToWhere)    
        }
    }

    return repository
}

// let regexp = new RegExp(`^${nome}`, 'i')
//             return await Instrutor.find({
//                 nome: {
//                     $regex: regexp
//                 }
//             })