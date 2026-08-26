const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js!");

const content = fs.readFileSync("hello.txt", "utf8");
console.log(content);

