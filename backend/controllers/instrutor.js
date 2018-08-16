module.exports = app => {
    const instrutorRepository = app.repositories.instrutor

    const controller = {
        post: async (req, res) => {
            try {
                let instrutor = {
                    nome: req.body.nome,
                    data_nasc: req.body.data_nasc  
                }
                await instrutorRepository.create(instrutor)
                res.status(201).json({ message: 'Instrutor cadastrado com sucesso!' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            } 
        },

        get: async (req, res) => {
            try {
                if(req.query.hasOwnProperty('nome')) {
                    let nome = req.query.nome
                    let instrutores = await instrutorRepository.getByNome(nome)
                    res.status(200).json(instrutores)
                } else {
                    let instrutores = await instrutorRepository.getAll()
                    res.status(200).json(instrutores)                    
                }
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            } 
        },

        put: async (req, res) => {
            try {
                let id = req.params.id
                let instrutor = req.body
                await instrutorRepository.update(id, instrutor)
                res.status(201).json({ message: 'Instrutor atualizado com sucesso!' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            } 
        },

        delete: async (req, res) => {
            try {
                let id = req.params.id
                await instrutorRepository.delete(id)
                res.status(201).json({ message: 'Instrutor removido com sucesso!' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar requisição', error: e.message })
            } 
        }
    }

    return controller
}