const cookieParser = require('cookie-parser');
var express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(cookieParser());

app.get('/',function(req,res){
    res.cookie("name", "raj")
    res.send('done')
})

app.get('/read',function(req,res){
    console.log(req.cookies);
    res.send('done hogaya')
})


app.listen(3000);
