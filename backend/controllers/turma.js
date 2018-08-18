module.exports = app => {
    const turmaRepository = app.repositories.turma

    let controller = {
        post: async (req, res) => {
            try {
                let turma = req.body
                await turmaRepository.create(turma)
                res.status(201).json({ message: 'Turma cadastrada com sucesso' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        },

        get: async (req, res) => {
            try {
                let turmas = await turmaRepository.getAll()
                res.status(200).json(turmas)
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        }
    }

    return controller
}