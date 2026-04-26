Aim : To implement built-in module in Node.js

const fs = require('fs');

const text1 = fs.readFileSync("file.txt", "utf-8");

console.log(text1);

let text2 = fs.readFileSync("file.txt","utf-8");

text2=text2.replace("😊😊","👍👍");

text2=text2.replace("Hello", "Good Morning");

console.log(text2);

// Another module

const os require('os');

console.log("OS platform name is ", os.platform());

console.log("OS type is: ", os.type());

console.log("CPU Architecture here is ", os.arch()); console.log("Total memory required is: ", os.totalmem());

console.log("Free Memory", os.freemem());

console.log("Home Directory is ", os.homedir());
