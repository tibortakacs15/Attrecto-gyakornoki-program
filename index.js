const express = require('express');
const app = express();

// Read
app.get('/', (req, res) => {
    res.send('GET /')
});

// Create
app.post('/users', (req, res) => {
    res.send('POST /users')
});

// Update
app.put('/users/:identifier', (req, res) => {
    res.send('PUT /users/id')
});

// Delete
app.delete('/users/:identifier', (req, res) => {
    res.send('DELETE /users/id')
});

app.listen(3000);