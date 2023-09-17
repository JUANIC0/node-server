const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para el análisis de solicitudes JSON
app.use(bodyParser.json());

// Importa los routers que has creado
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Usa los routers en tus rutas específicas
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Manejo de otras rutas y middleware aquí
// ...

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor Express funcionando en el puerto ${port}`);
});
