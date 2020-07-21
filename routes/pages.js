const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const Article = require('../models/article');

const router = express.Router();

router.get('/', (req, res)=> {res.render('index');});

router.get('/map', (req, res)=> {res.render('map');});

router.get('/contact', (req, res)=> {res.render('contact');});

router.get('/education', (req, res)=> {res.render('education');});

router.get('/jobHistory', (req, res)=> {res.render('jobHistory');});

router.get('/article', (req,res)=> {res.render('article');});

router.post('/submitArticle', (req,res)=> {
    
    const title = req.body.title;
    const date = new Date();
    const content = req.body.content;

    const article = new Article(title, date, content);
    article.save();

    const articles = article.findAll();

    res.render('submitArticle', {articles: articles});
});

router.post("/submitContact", (req, res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const comments = req.body.comments;

    const contact = new Contact(name, email, subject, comments);
    contact.save();

    res.render('submitContact',{contact: contact})});

module.exports = router;