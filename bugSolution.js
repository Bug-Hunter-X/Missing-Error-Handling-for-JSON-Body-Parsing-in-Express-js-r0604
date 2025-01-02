const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log('Received User:', user);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON body' });
  }
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});