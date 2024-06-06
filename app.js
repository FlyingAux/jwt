const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/',function(req,res,next){
    var token = jwt.sign({ email: 'raj@example.com' }, 'shhhhh');
    // console.log(res.cookie('token', token))
    res.cookie('token', token);
    res.send('Done')
})

app.get('/read',function(req,res,next){
    let data = jwt.verify(req.cookies.token,"shhhhh");
    console.log(data);
    res.send('reading');
})

app.listen(3000);