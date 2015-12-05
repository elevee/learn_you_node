// Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument.  
   
//   For example, if you get 'txt' as the second argument then you will need to  
//   filter the list to only files that end with .txt. Note that the second  
//   argument will not come prefixed with a '.'.  
   
//   The list of files should be printed to the console, one file per line. You  
//   must use asynchronous I/O.  

var fs = require('fs');
var path = require('path');
var dir = process.argv[2]; //"/Users/ericlevine/Sites/learnyounode/"
var filter = process.argv[3]; //extension to filter by
fs.readdir(dir, function (err, data) {
  if (err) throw err;
  var output = [];
  for (i=0, j=data.length; i<j; i++){
  	var extension = path.extname(data[i]);
  	var ext = "";
  	if (extension.charAt(0) === "."){
  		ext = extension.slice(1);
  	}
  	if (ext === filter){
  		console.log(data[i]);
  	}
  }
});