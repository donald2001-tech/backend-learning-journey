const express = require("express");
const app = express();
app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Express", done: false },
    { id: 2, title: "Build a task API", done: false }
];

app.get("/tasks", (req, res) => {
    res.send(tasks);
});

app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        done: false
    };
    tasks.push(newTask);
    res.send(newTask);
});

app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.send({ message: "Task deleted" });
});

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((t) => t.id === id);

    if (!task) {
        res.send({ message: "Task not found"});
        return;
    }

    task.title = req.body.title;
    task.done = req.body.done;
    res.send(task);
});

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

