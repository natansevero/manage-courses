const express = require('express')
const consign = require('consign')

const app = express()

consign()
    .include('libs/middlewares.js')
    .then('libs/db.js')
    // .then('models')
    // .then('repositories')
    // .then('controllers')
    .then('routes')
    .then('libs/boot.js')
    .into(app)