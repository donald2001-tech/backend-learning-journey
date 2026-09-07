const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'notesdb',
    password: '1234',
    port: 5432,
});

app.get("/notes", (req, res) => {
    pool.query("SELECT * FROM notes", (err, result) => {
        if (err) {
            res.send({ error: err.message });
        } else {
            res.send(result.rows);
        }
    });
});

app.post("/notes", (req, res) => {
    const { title, content } = req.body; 

    pool.query(
        "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
        [title, content],
        (err, result) => {
            if (err) {
                res.send({ error: err.message });
            } else {
                res.send(result.rows[0]);
            }
        }
    );
});

app.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;

    pool.query(
        "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
        [title, content, id],
        (err, result) => {
            if (err) {
                res.send({ error: err.message });
            } else {
                res.send(result.rows[0]);
            }
        }
    );
});

app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    pool.query(
        "DELETE FROM notes WHERE id = $1 RETURNING *",
        [id],
        (err, result) => {
            if (err) {
                res.send({ error: err.message });
            } else {
                res.send( {message: "Notes deleted"} );
            }
        }
    );
});

const PORT = 5002;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
