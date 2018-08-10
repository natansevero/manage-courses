const mongoose = require('mongoose');

module.exports = app => {
    let uri = 'mongodb://localhost:27017/managecourses'
    
    if(process.env.NODE_ENV == 'production') {
        uri = process.env.MONGODB_URI
        mongoose.connect(process.env.MONGODB_URI)
    } else {
        mongoose.connect(uri);
    } 

    mongoose.connection.on('error', err => {
        console.error('Error in connection, my friend')
        process.exit(1)
    })

    mongoose.connection.on('connected', () => {
        console.log(`Connected in this uri: ${uri}`)
    })
}