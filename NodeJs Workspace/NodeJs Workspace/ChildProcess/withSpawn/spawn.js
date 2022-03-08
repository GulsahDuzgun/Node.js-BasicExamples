const fs = require('fs');
const childProcess = require('child_process'); 

for(var i=0; i<3; i++)
{var workerProcess = childProcess.spawn('node',['support.js',i]);
	
	workerProcess.stdout.on('data', function (data)
	{console.log('stdout: ' + data);}
	);
	
	workerProcess.stderr.on('data', function (data){
	console.log('stderr: ' + data);
		});
		workerProcess.on('close', function (code){
		console.log('child process exted with code: '+ code);
			});
		
	}
