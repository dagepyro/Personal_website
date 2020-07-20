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