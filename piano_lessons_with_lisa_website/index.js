var express = require('express');
var app = express();
const path = require('path');




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('trust proxy', 1);
app.use(express.static('public'));



app.get('/', function(req, res){
    res.render('index');

})

app.get('/index', function(req, res){
    res.render('index');

})


app.get('/about', function(req, res){
    res.render('about');

})

app.get('/philosophy', function(req, res){
    res.render('philosophy');

})

app.get('/contact', function(req, res){
    res.render('contact');
})

app.get('/howto', function(req, res){
    res.render('howto');

})

app.get('/mystudents', function(req, res){
    res.render('mystudents');

})



app.listen(3000, function() {
    console.log('Our app is running on port 3000')
}) 