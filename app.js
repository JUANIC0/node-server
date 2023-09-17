
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
=======
const fs = require('fs');
const { addTask, deleteTask, completeTask } = require('./taskManager');

// Crear una nueva tarea y agregarla
const newTask = {
  description: 'Buy groceries',
  completed: false
};

addTask(newTask)
  .then(result => {
    console.log(result); // Debería imprimir "Task added successfully!"
  })
  .catch(error => {
    console.error(error);
  });

// Eliminar una tarea por índice
const taskIndexToDelete = 0; // Por ejemplo, eliminar la primera tarea

deleteTask(taskIndexToDelete)
  .then(result => {
    console.log(result); // Debería imprimir "Task deleted successfully!"
  })
  .catch(error => {
    console.error(error);
  });

// Marcar una tarea como completada por índice
const taskIndexToComplete = 1; // Por ejemplo, marcar la segunda tarea como completada

completeTask(taskIndexToComplete)
  .then(result => {
    console.log(result); // Debería imprimir "Task marked as completed!"
  })
  .catch(error => {
    console.error(error);
  })
