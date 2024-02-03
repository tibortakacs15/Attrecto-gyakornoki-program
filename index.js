const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// Read
app.get("/users", (req, res) => {
    fs.readFile("./data/users.json", (err, file) => {
      res.send(JSON.parse(file));
    });
  });

// Create
app.post("/users", bodyParser.json(), (req, res) => {
    const newUser = {
      user_name: req.body.user_name
    };
  
    fs.readFile("./data/users.json", (err, file) => {
      const users = JSON.parse(file);
      users.push(newUser);
      fs.writeFile("./data/users.json", JSON.stringify(users), (err) => {
        res.send(newUser);
      });
    });
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