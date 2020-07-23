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
    Article.collection.insertOne(article)
    .then(result => {console.log('Insert success..'); })
    .catch (err => console.log(err));

    Article.find()
        .then(results => {
            res.render('submitArticle', {articles: results});
        })
        .catch (err => {console.log(err)})
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

});
    

module.exports = router;