import express from 'express';

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.post('/register', (req, res) => {
  res.json({ message: 'Registered successfully' });
});

app.listen(4001, () => {
  console.log('Authorizer running on http://localhost:4001');
});
