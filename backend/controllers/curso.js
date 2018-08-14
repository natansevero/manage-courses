module.exports = app => {
    const cursoRepository = app.repositories.curso;
    
    let controller = {
        post: async (req, res) => {
            try {
                await cursoRepository.create(req.body)
                res.status(201).json({ message: 'Curso cadastrado com sucesso!' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        },

        get: async (req, res) => {
            try {
                if(req.query.hasOwnProperty('nome')) {
                    let nome = req.query.nome
                    let curso = await cursoRepository.getByNome(nome)
                    res.status(200).json(curso)
                } else {
                    let cursos = await cursoRepository.getAll()
                    res.status(200).json(cursos)
                }
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        },

        put: async (req, res) => {
            try {
                let id = req.params.id
                let curso = req.body
                await cursoRepository.update(id, curso)
                res.status(201).json({ message: 'Curso atualizado com sucesso!' })                
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        },

        delete: async (req, res) => {
            try {
                let id = req.params.id
                await cursoRepository.delete(id)
                res.status(201).json({ message: 'Curso removido com sucesso!' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            }
        }
    }

    return controller
}