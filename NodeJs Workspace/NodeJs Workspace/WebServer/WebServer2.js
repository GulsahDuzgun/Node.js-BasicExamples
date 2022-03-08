var express = require('express');
var app = express();

app.get('/', function (req,res){
	console.log('Got a GET request for homepage');
	res.send('Hello Get');
	})
	
	app.get('/list_user',function (req,res){
		console.log("GET a DELETE request");
		res.send('page listing');
		})
	app.get('/ab*cd', function(req ,res)
	{
		console.log("GET a request for ab*cd");
		res.send('Page pattern Mach');
		
		})
		
		var server = app.listen(8081,function (){
			var host = server.address().address
			var port = server.address().port
			console.log(' Example app listenning at http://%s:%s' , host, port);
			})
