import express from 'express';

const app = express();
app.use(express.json());

app.post('/create-seller', (req, res) => {
  res.json({ message: 'seller created successfully' });
});

app.post('/delete-seller', (req, res) => {
  res.json({ message: 'seller deleted successfully' });
});

app.listen(4004, () => {
  console.log('Authorizer running on http://localhost:4004');
});
