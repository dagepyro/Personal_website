const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages.js');



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  '/public')));

app.use('/', pagesRouter);

app.listen(3000, () =>{ console.log(' Express server is running')});