const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from my server!");
});

app.get("/about", (req, res) => {
    res.send("This is about the page");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at dsonnah9@gmail.com");
});

const PORT = 3000;

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/square/:number", (req, res) => {
    const number = req.params.number;
    res.send(`${number} squared is ${number * number}`);
});

app.get("/reverse/:word", (req, res) => {
    const word = req.params.word;
    const reversed = word.split("").reverse().join("");
    res.send(`${word} reversed is ${reversed}`);
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);    
});