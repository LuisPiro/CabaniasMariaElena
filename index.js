require('dotenv').config(); // Asegúrate de que esta línea esté al principio del archivo

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Usa la variable PORT del archivo .env

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
