 // Write a program that performs an HTTP GET request to a URL provided to you  
 //  as the first command-line argument. Collect all data from the server (not  
 //  just the first "data" event) and then write two lines to the console  
 //  (stdout).  
   
 //  The first line you write should just be an integer representing the number  
 //  of characters received from the server. The second line should contain the  
 //  complete String of characters sent by the server.  

var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(response){
	response.setEncoding("utf8"); // so data events return strings, saves us the extra step of converting
	response.pipe(bl(function (err, data) { 
		console.log( data.length );
		console.log( data.toString() );
	}));

	response.on('error', console.error)
});

