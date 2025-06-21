<<<<<<< HEAD
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
=======
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
>>>>>>> b61260b5420e24df710c702a7289b8bb480a7134
});