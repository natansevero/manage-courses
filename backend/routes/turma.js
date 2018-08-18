module.exports = app => {
    const turmaController = app.controllers.turma

    app.post('/api/turmas', turmaController.post)
    app.get('/api/turmas', turmaController.get)
}