var fs = require("fs")
var buf = fs.readFileSync(process.argv[2]);
var some=  buf.toString();
var num = some.split("\n").length-1;
console.log(num)

