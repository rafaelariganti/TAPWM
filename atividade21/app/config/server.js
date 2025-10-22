let express = require('express');
let consign = require('consign')
let app = express(); //funcionando o express
app.set('view engine','ejs');

app.set('views', './app/views');
consign().include('app/routes').into(app)
module.exports = app;   