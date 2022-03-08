buf = new Buffer.alloc(26);
for(var i = 0 ; i < 26 ; i++)
{
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));


var buffer1 = new Buffer.from('HELLO WORLD');
var buffer2 = new Buffer.from('HELLO STRANGER');
var buffer3 = new Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: "+ buffer3.toString()+ "\n");

var result = buffer1.compare(buffer2);

if(result<0)
{console.log(buffer1 + " comes before " +buffer2);
	}
	
else if(result == 0)
{
	console.log(buffer1 +" is same as "+buffer2 );
}
else
{
	console.log(buffer1+ " comes after "+buffer2);
	}
