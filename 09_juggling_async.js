//   This problem is the same as the previous problem (HTTP COLLECT) in that  
//   you need to use http.get(). However, this time you will be provided with  
//   three URLs as the first three command-line arguments.  
   
//   You must collect the complete content provided to you by each of the URLs  
//   and print it to the console (stdout). You don't need to print out the  
//   length, just the data as a String; one line per URL. The catch is that you  
//   must print them out in the same order as the URLs are provided to you as  
//   command-line arguments. 

var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(response){
	response.setEncoding("utf8"); // so data events return strings, saves us the extra step of converting
	response.pipe(bl(function (err, data) { 
		console.log( data.toString() );
	}));

	response.on('error', console.error)

	response.on("end", function(){
		http.get(process.argv[3], function(response){
			response.setEncoding("utf8");
			response.pipe(bl(function (err, data) { 
				console.log( data.toString() );		
			}));
			response.on("end", function(){
				http.get(process.argv[4], function(response){
					response.setEncoding('utf8');
					response.pipe(bl(function(err, data) {
						console.log( data.toString() );
					}));
				});
			});
		});
	});
});