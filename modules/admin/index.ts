import express from 'express';

const app = express();
app.use(express.json());

app.post('/delete-admin', (req, res) => {
  res.json({ message: 'admin deleted successfully' });
});

app.post('/create-admin', (req, res) => {
  res.json({ message: 'admin created successfully' });
});

app.listen(4002, () => {
  console.log('Admin running on http://localhost:4002');
});
