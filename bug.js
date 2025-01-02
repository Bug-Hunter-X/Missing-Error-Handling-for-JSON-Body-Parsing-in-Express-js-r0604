const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling for cases where req.body is not properly parsed or is missing required fields
  console.log('Received User:', user);
  res.status(201).send('User created');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});