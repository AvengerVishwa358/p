Aim : Exploaration of the node.js and its installation to print hello world.

const fs = require('fs')
var text1 = fs.readFileSync("file_01.txt", "utf-8");
console.log(text1)

var text2 = fs.readFileSync("file_01.txt","utf-8")
text2 = text2.replace("Hello!", "Konichiwa!")
console.log(text2)
