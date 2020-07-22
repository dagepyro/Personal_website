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
    const date = new Date();
    const article = new Article ({
        title: req.body.title,
        date: date,
        content: req.body.content,
    });

    article.save().then(result => {console.log('an article has been added')}
    );
    /*
    .then(result => {
        console.log('an article has been added')
        res.render('submitArticle', {contact: result})
    .catch(err => console.log(err));
    })*/
    
    /*
    const title = req.body.title;
    const date = new Date();
    const content = req.body.content;

    const article = new Article(title, date, content);
    article.save();

    const articles = article.findAll();

    res.render('submitArticle', {articles: articles});
    */
});

router.post("/submitContact", (req, res)=>{
    /* use a schema modle */


        const contact = new Contact ({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            comments: req.body.comments,
        })
    
        contact.save()
        .then(result => {
            res.render('submitContact', {Contact: result})
        .catch(err => console.log(err));
        })

    /* end of schema modle */


   /* const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const comments = req.body.comments;

    const contact = new Contact(name, email, subject, comments);
    contact.save();

    res.render('submitContact',{contact: contact});
    */

});
    

module.exports = router;