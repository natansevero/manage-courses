module.exports = app => {
    const instrutorController = app.controllers.instrutor

    app.post('/api/instrutores', instrutorController.post)
    app.get('/api/instrutores', instrutorController.get)
    app.put('/api/instrutores/:id', instrutorController.put)
    app.delete('/api/instrutores/:id', instrutorController.delete)
}