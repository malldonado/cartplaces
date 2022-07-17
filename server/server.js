const express = require('express');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');

const connection = require('./database/database');

//Database

connection
    .authenticate()
    .then(() => {
        console.log('Connection with the database');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes

//test api
app.get("/api", (req, res) => {
    res.json({'users': ['userOne', 'userTwo', 'userThree'] })
});


app.get('/login', (req, res) => {
    res.send(console.log('login'));
});

app.get('/register', (req, res) => {
    res.send(console.log('register'));
});

// app.post('/photoDB', (req, res) => {
//     image = req.body.image;
// })

app.listen(5000, ()=> {console.log('Server run');});