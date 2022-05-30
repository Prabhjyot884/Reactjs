const dotenv = require("dotenv");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

dotenv.config({path: './config.env' });
require('./db/conn');

//Require Model
const User = require('./model/userSchema');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use(require('./router/auth'));

const PORT = process.env.PORT ;
 

// Middelware
const middleware = (req, res, next) => {
    console.log('Hello my Middleware');
    next();
}
app.get('/', (req,res) => {
    res.send('Hello world from the server');
});
app.get('/yoga',middleware,(req,res) => {
    console.log('hello about');
    res.send('hello about world from the server'); 
});
app.get('/meditation',middleware,(req,res) => {
    res.send('Hello meditiation world from the server');
}); 
app.get('/contact',(req,res) => {
    res.send('Hello Contact world from the server');
});
app.get('/login',(req,res) =>{
    res.send('Hello Login world from the server');
});
app.get('/signup',(req,res) =>{
    res.send('Hello Signup world from the server');
});
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})