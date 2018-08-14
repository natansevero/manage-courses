module.exports = app => {
    const alunoController = app.controllers.aluno

    app.post('/api/alunos', alunoController.post) 
    app.get('/api/alunos', alunoController.get)
    app.put('/api/alunos/:id', alunoController.put) 
    app.delete('/api/alunos/:id', alunoController.delete)
}