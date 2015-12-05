var fs = require('fs');
var path = process.argv[2];
// var stringifiedFile = fs.readFile(path, ).toString();
fs.readFile(path, function (err, data) {
  if (err) throw err;
  var stringifiedFile = data.toString();
  var splitFileContents = stringifiedFile.split("\n");
  console.log(splitFileContents.length - 1);  // test file doesn't have a newline at the end, so need to adjust for it
});



