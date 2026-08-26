
const fs = require("fs");
fs.writeFileSync("note.txt", "Learned Node.js basics today");
const content = fs.readFileSync("note.txt", "utf8");


const chalk = require("chalk");

console.log(chalk.red("Note: " + content));
