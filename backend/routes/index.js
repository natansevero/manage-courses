module.exports = app => {
    app.get('/api/', (req, res) => {
        res.status(200).json({ status: 'okay' })
    })
}