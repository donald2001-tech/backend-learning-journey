const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'backend_learning',
    password: '1234',
    port: 5432,
});

pool.query("SELECT * FROM contacts", (err, result) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(result.rows);
    }
    pool.end();
});