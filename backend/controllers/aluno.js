const rand = require('generate-key')

module.exports = app => {
    const alunoRepository = app.repositories.aluno

    let controller = {
        post: async (req, res) => {
    
            let matricula = rand.generateKey();
    
            try {
                await alunoRepository.create({
                    nome: req.body.nome,
                    data_nasc: req.body.data_nasc,
                    matricula: matricula
                })
    
                res.status(201).json({ message: "Aluno cadastrado com sucesso" })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar a requisição', error: e.message })
            }
        },
    
        get: async (req, res) => {
            try {
                if(req.query.hasOwnProperty('nome')) {
                    let nome = req.query.nome;
                    let aluno = await alunoRepository.getOneByNome(nome);
                    res.status(200).json(aluno)
                } else {
                    let alunos = await alunoRepository.getAll()
                    res.status(200).json(alunos)
                }
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar a requisição', error: e.message })
            }
        },

        put: async (req, res) => {
            try {
                let id = req.params.id
                let aluno = req.body.aluno
                await alunoRepository.update(id, aluno)
                res.status(201).json({ message: 'Aluno atualizado com sucesso' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar a requisição', error: e.message })
            }
        },

        delete: async (req, res) => {
            try {
                let id = req.params.id
                await alunoRepository.delete(id)
                res.status(201).json({ message: 'Aluno removido com sucesso' })
            } catch(e) {
                res.status(500).json({ message: 'Falha ao processar a requisição', error: e.message })
            }
        }
    }

    return controller

}