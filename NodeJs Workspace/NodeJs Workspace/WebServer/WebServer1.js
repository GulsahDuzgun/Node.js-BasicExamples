var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

app.get('/index.html', function(req,res){
	res.sendFile(__dirname + "/" + "index.html" );
	
	})
	
app.get('/process_get', function (req,res){
	response = {
		name:req.query.name,
		password:req.query.password
		};
		console.log(response);
		res.end(JSON.stringify(response));
	})
app.post('/process_post', urlencodedParser, function(req,res)
{
	response={
		name:req.body.name,
		password:req.body.password
		};
		console.log(response);
		res.end(JSON.stringify(response));
	
	})
	
	var server = app.listen(8081, function(){
		var host = server.address().address
		var port = server.address().port
		console.log("Example app listening at http://%s:%s", host, port);
		})
		
