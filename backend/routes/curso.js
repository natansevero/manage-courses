module.exports = app => {
    const cursoController = app.controllers.curso

    app.post('/api/cursos', cursoController.post)
    app.get('/api/cursos', cursoController.get)
    app.put('/api/cursos/:id', cursoController.put)
    app.delete('/api/cursos/:id', cursoController.delete)
}