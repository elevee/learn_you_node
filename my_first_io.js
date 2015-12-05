var fs = require('fs');
var path = process.argv[2];
var stringifiedFile = fs.readFileSync(path).toString();
var splitFileContents = stringifiedFile.split("\n");
console.log(splitFileContents.length - 1);  // test file doesn't have a newline at the end, so need to adjust for it


// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
//  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 