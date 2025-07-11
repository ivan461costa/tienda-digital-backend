const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando correctamente' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

module.exports = app;
