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
  });
