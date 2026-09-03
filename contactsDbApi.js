const express = require('express'); 
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'backend_learning',
    password: '1234',
    port: 5432,
});


app.get("/contacts", (req, res) => {
    pool.query("SELECT * FROM contacts", (err, result) => {
        if (err) {
            res.send({ error: err.message });
        } else {
            res.send(result.rows);
        }
    });
});

app.post("/contacts", (req, res) => {
    const { name, phone } = req.body;

    pool.query(
        "INSERT INTO contacts (name, phone) VALUES ($1, $2) RETURNING *",
        [name, phone],
        (err, result) => {
            if (err) {
                res.send({ error: err.message });
            } else {
                res.send(result.rows[0]);
            } 
        }
    );
});

app.put("/contacts/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, phone } = req.body;

    pool.query(
        "UPDATE contacts SET name = $1, phone = $2 WHERE id = $3 RETURNING *",
        [name, phone, id],
        (err, result) => {
            if (err) {
                res.send({ error: err.message });
            } else if (result.rows.length === 0) {
                res.send({ message: "Contact not found" });
            } else {
                res.send(result.rows[0]);
            }
        }
    );
})

app.delete("/contacts/:id", (req, res) => {
  const id = Number(req.params.id);
  
  pool.query(
    "DELETE FROM contacts WHERE id = $1",
    [id],
    (err, result) => {
      if (err) {
        res.send({ error: err.message });
      } else {
        res.send({ message: "Contact deleted" });
      }
    }
  );
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});