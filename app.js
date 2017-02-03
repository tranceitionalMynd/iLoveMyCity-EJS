var express=require('express');
var app=express();
var routes=require('./routes/routes.js');

app.set('view engine', 'ejs');
app.get('/', routes.home);
app.get('/:city', routes.city);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

var server = app.listen(port, function(request, result){
    console.log("Listening to http://localhost:"+port);
});
