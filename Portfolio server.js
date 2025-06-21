const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/contact', (req, res) => {
    console.log('Received:', req.body);
    res.json({ message: 'Test message received!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});