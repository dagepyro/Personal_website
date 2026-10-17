const express = require( 'express' );
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages.js');

const mongoose = require('mongoose');
const mongooseA = require('mongoose');

const app = express();

//creating https options
const CERT_DIR = path.join(__dirname, 'certs');
const options = {
    key: fs.readFileSync(path.join(CERT_DIR, 'dev-server-key.pem')),
    cert: fs.readFileSync(path.join(CERT_DIR, 'dev-server-cert.pem'))
}

// create server hello
const server = https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
// end of create server hello

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  '/public')));

app.use('/', pagesRouter);

//mongoose.connect('mongodb://localhost:27017/ContactDB', { useNewUrlParser:true, useUnifiedTopology:true})
//.then(()=> {
//    app.listen(3000, () =>{ console.log('mongodb connections sucess.... And Express server is running');
//});
//})

 app.listen(3000, () =>{ console.log('Express server is running on port 3000')});

