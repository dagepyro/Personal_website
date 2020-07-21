const articles = [];

class Article{
    constructor(title, date, content){
        this.title = title;
        this.date = date;
        this.content = content;
    }

    save(){
        articles.push(this);
    }

    findAll(){
        return articles;
    }
}

module.exports = Article;