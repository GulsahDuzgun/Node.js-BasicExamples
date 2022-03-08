var fs = require("fs");
//Asenkron okuma
fs.readFile('input.txt',function(err,data){
	if(err)
	{return console.error(err);}
	console.log("Asynchronous read: " + data.toString());
	});
	
	//senkron okuma en başta burayı okumalı
	
	var data = fs.readFileSync('input.txt');
	console.log("Synchronous read: " + data.toString());
	
	fs.stat('input.txt',function(err,stats){
		if(err){return console.error(err);}
		
		console.log(stats);
		console.log("Got file info succsessfully");
		
		console.log("isFile ? " + stats.isFile());
		console.log("isDirectory ? "+ stats.isDirectory());
		} );

console.log("program ended");
