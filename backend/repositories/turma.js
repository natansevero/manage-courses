module.exports = app => {
    const Turma = app.models.turma

    let repository = {
        create: async data => {
            let turma = new Turma(data)
            await turma.save()
        },

        getAll: async () => {
            return await Turma.find({})
                .populate('alunos', 'nome')
                .populate('cursos.curso', 'nome')    
                .populate('cursos.instrutor', 'nome')    
        }
    }

    return repository
}