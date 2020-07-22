const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
    required: true,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },

    comments: {
        type: String,
    },
})

module.exports = mongoose.model('Contact', contactSchema);

/*
const contact = [];

class Contact{
    constructor(name, email, subject, comments){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.comments = comments;
    }

    save(){
        contact.push(this);
    }
}

module.exports = Contact;
*/