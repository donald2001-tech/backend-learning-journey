const express = require("express");
const app = express();
app.use(express.json());

let contacts = [
    { id: 1, name: "Donald", phone: "074449754" },
    { id: 2, name: "Hannah", phone: "031837545" }
];

app.get("/contacts", (req, res) => {
    res.send(contacts);
});

app.post("/contacts", (req, res) => {
    const newContact = {
        id: contacts.length + 1,
        name: req.body.name,
        phone: req.body.phone
    };
    contacts.push(newContact);
    res.send(newContact);
});

app.put("/contacts/:id", (req, res) => {
    const id = Number(req.params.id);
    const contact = contacts.find((c) => c.id === id);

    if (!contact) {
        res.send({ message: "Contact not found"});
        return;
    };
    
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    res.send(contact);
});

app.delete("/contacts/:id", (req, res) => {
    const id = Number(req.params.id);
    contacts = contacts.filter((c) => c.id !== id);
    res.send({ message: "Contact deleted" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});