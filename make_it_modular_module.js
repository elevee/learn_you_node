module.exports = function(dir, filter, callback){
	var fs = require('fs'),
    path = require('path');
	fs.readdir(dir, function (err, data) {
	  if (err) return callback(err);
	  var output = [];
	  for (i=0, j=data.length; i<j; i++){
	    var extension = path.extname(data[i]);
	    var ext = "";
	    if (extension.charAt(0) === "."){
	      ext = extension.slice(1);
	    }
	    if (ext === filter){
	      output.push(data[i]);
	      console.log(data[i]);
	    }
	  }
	  callback(err, output);
	});
};