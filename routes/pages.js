const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact')

const router = express.Router();

router.get('/', (req, res)=> {res.render('index');});

router.get('/map', (req, res)=> {res.render('map');});

router.get('/contact', (req, res)=> {res.render('contact');});

router.get('/education', (req, res)=> {res.render('education');});

router.get('/jobHistory', (req, res)=> {res.render('jobHistory');});

router.post("/submitContact", (req, res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const comments = req.body.comments;

    const contact = new Contact(name, email, subject, comments);
    contact.save();

    res.render('submitContact',{contact: contact})});

module.exports = router;