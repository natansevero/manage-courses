const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors')

module.exports = app => {
    app.set('port', process.env.PORT || 3000)

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    }))
}