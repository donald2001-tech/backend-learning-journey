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


app.get("/add/:num1/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2} = ${sum}`);
});

app.get("/multiply/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    const product = num1 * num2;
    res.send(`${num1} * ${num2} = ${product}`);
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);    
});