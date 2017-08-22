var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    "article-one":{ "title": 'Article_one',  "date": 'sept 3 2015',
    "content": 'This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.'
    },
    "article-two":{ "title": 'Article_two',  "date": 'sept 10 2015',
    "content": 'This is the content for my second article.'
    },
    "article-three":{ "title": 'Article_three',  "date": 'sept 13 2015',
    "content": 'This is the content for my third article.'
    }
  
};
function replaceTemplate(args){
    var title = args.title;
    var date = args.date;
    var content = args.content;
    var template = `<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name = "viewport" content ="width=device-wdith, initial-scale=1.0">
        <link ref="stylesheet" src="ui/style.css">
     </head>
    <body>
    <div class ="container">
           <div>
                <a href ="/"> Home</a>
            </div>
            <hr/>
            <h3> ${title}</h3>
            <div>
               ${date}
            </div>
            <p>
                ${content}
            </p>
        </div>
    </body>
</html>
`
return template;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
  res.send(replaceTemplate(articles[req.params.articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
