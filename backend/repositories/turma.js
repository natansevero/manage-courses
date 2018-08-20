function facRegexp(nome) {
    return new RegExp(`^${nome}`, 'i')
}

module.exports = app => {
    const Turma = app.models.turma

    let repository = {
        create: async data => {
            let turma = new Turma(data)
            await turma.save()
        },

        get: async (query) => {
            let find = {}
            query.hasOwnProperty('nome') ? find['nome'] = { $regex: facRegexp(query.nome) } : find = {}

            let turmas = await Turma.find(find)
                .populate({ path: 'alunos', select: 'nome' })
                .populate({ 
                    path: 'cursos.curso', 
                    select: 'nome'  
                })
                .populate({ path: 'cursos.instrutor', select: 'nome' })
            
            if(query['curso'] && query['instrutor']) {
                let finalResult = []

                turmas.forEach(turma => {
                    let thatOkay = false;
                    thatOkay = turma.cursos.some((obj) => obj.curso.nome.match(facRegexp(query['curso'])) && obj.instrutor.nome.match(facRegexp(query['instrutor'])) )
                    if(thatOkay) finalResult.push(turma)
                })

                return finalResult
            } else if(query['curso'] || query['instrutor']) {
                let finalResult = []

                turmas.forEach(turma => {
                    let thatOkay = false;
                    thatOkay = turma.cursos.some((obj) => obj.curso.nome.match(facRegexp(query['curso'])) || obj.instrutor.nome.match(facRegexp(query['instrutor'])) )
                    if(thatOkay) finalResult.push(turma)
                })

                return finalResult                
            } else {
                return turmas
            }
        }
    }

    return repository
}

