const express = require('express');
const app = express();
const port = 3000;

let users = [
  { id: 1, name: "Amina", age: 25 },
  { id: 2, name: "Khalid", age: 30 },
  { id: 3, name: "Layla", age: 22 }
];


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send("Welcome to the User Info Server");
});

app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user);
});

app.get('/search', (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res.json(users);
  }

  
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery.toLowerCase())
  );

  res.json(filteredUsers);
});

app.post('/users', (req, res) => {
  const { name, age } = req.body;

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  
  const newUser = { id: newId, name, age: Number(age) };
  
  users.push(newUser);
  
  res.status(201).json(newUser);
});


app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});