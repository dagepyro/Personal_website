const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages.js');

const mongoose = require('mongoose');
const mongooseA = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  '/public')));

app.use('/', pagesRouter);

mongoose.connect('mongodb://localhost:27017/ContactDB', { useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> {
    app.listen(3000, () =>{ console.log('mongodb connections susess.... And Express server is running');
});
})

// app.listen(3000, () =>{ console.log('Express server is running on port 3000')});

