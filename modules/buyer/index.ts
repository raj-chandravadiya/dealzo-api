import express from 'express';

const app = express();
app.use(express.json());

app.post('/delete-buyer', (req, res) => {
  res.json({ message: 'buyer deleted successfully' });
});

app.post('/create-buyer', (req, res) => {
  res.json({ message: 'buyer created successfully' });
});

app.listen(4003, () => {
  console.log('buyer running on http://localhost:4003');
});
