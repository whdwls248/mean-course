const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");

    next();
})

app.post('api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);

    res.status(201).json({
        message: "Post API Success!"
    });
})

app.use('/api/posts', (req, res, next) => {
    console.log("HI")
    const posts = [
        {
          id : 'asdfasdfasdfadf',
          title: 'First server-side post',
          content: 'Server'  
        },
        { 
            id : 'asdfasdfasdfadf',
            title: 'Second server-side post',
            content: 'Server'  
          }
    ];

    res.status(200).json({
        message: "GET API success!",
        posts: posts
    });
});

module.exports = app;