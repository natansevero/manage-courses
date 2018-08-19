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

            let queryToOr = []
            
            query.hasOwnProperty('curso') ? queryToOr.push({ 'cursos.curso.nome': { $eq: query['curso'] } }) : []
            
            // query.hasOwnProperty('instrutor') ? queryToOr.push({ 'cursos.instrutor.nome': query['instrutor'] }) : []

            console.log(queryToOr)

            return await Turma.find({})
                .populate({ path: 'alunos', select: 'nome' })
                .populate({ 
                    path: 'cursos.curso', 
                    select: 'nome', 
                    match: { $or: [
                        { nome: query['curso']  },
                        { nome: { $regex: /([A-Z a-z])\w+/g }  }  
                    ] }  
                })
                .populate({ path: 'cursos.instrutor', select: 'nome' })
                   
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