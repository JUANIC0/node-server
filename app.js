
const express = require('express');
const app = express();

// Middleware para permitir solo métodos HTTP válidos
function allowValidMethods(req, res, next) {
  const validMethods = ["GET", "POST", "PUT", "DELETE"];
  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ message: "Método HTTP no válido" });
  }
  next();
}

app.use(allowValidMethods);

 project-3

app.listen(port, () => {
  console.log(`Servidor Express funcionando en el puerto ${port}`);
});

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
 main
