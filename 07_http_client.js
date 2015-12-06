// Write a program that performs an HTTP GET request to a URL provided to you  
// as the first command-line argument. Write the String contents of each  
// "data" event from the response to a new line on the console (stdout). 

var http = require('http');
http.get(process.argv[2], function(response){
	response.setEncoding("utf8"); // so data events return strings, saves us the extra step of converting
	response.on("data", function(data){
		console.log(data);	
	});
	response.on('error', console.error)
});