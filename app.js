const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const test1 = require('./test1');
const test2 = require('./test2');
const test3 = require('./test3');
const test4 = require('./test4');

const path  = require('path');
const VIEWS = path.join(__dirname, 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routs
app.get('/', function (req, res) {
    res.sendFile('index.html', { root : VIEWS });
});

app.post('/test1', function(req, res){
    let data = test1(req.body.string1, req.body.string2);
    res.send(JSON.stringify(data));
});
app.post('/test2', function(req, res){
    let data = test2(parseInt(req.body.hour), parseInt(req.body.minute));
    res.send(JSON.stringify(data));
});
app.post('/test3', function(req, res){
    let data = test3(req.body.number);
    res.send(JSON.stringify(data));
});
app.post('/test4', function(req, res){
    let data = test4(req.body.lines);
    res.send(JSON.stringify('WILL BE DISPLAYED ON CONSOLE'));
});

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
});
