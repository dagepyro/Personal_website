const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res)=> {res.render('index');});
router.get('/index', (req, res)=> {res.render('index');});

router.get('/map', (req, res)=> {res.render('map');});

router.get('/contact', (req, res)=> {res.render('contact');});

module.exports = router;