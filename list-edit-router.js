const express = require('express');
const router = express.Router();
const fs = require('fs');

// Ruta para crear una tarea
router.post('/create', (req, res) => {
  const newTask = req.body;

  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error al leer el archivo de tareas' });
    } else {
      const tasks = JSON.parse(data);
      newTask.id = tasks.length + 1;
      tasks.push(newTask);

      fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
        if (err) {
          res.status(500).json({ message: 'Error al escribir en el archivo de tareas' });
        } else {
          res.json({ message: 'Tarea creada exitosamente' });
        }
      });
    }
  });
});

// Ruta para eliminar una tarea
router.delete('/delete/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);

  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error al leer el archivo de tareas' });
    } else {
      const tasks = JSON.parse(data);
      const taskIndex = tasks.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
          if (err) {
            res.status(500).json({ message: 'Error al escribir en el archivo de tareas' });
          } else {
            res.json({ message: 'Tarea eliminada exitosamente' });
          }
        });
      } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
      }
    }
  });
});

// Ruta para actualizar una tarea
router.put('/update/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const updatedTask = req.body;

  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error al leer el archivo de tareas' });
    } else {
      const tasks = JSON.parse(data);
      const taskIndex = tasks.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask;

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
          if (err) {
            res.status(500).json({ message: 'Error al escribir en el archivo de tareas' });
          } else {
            res.json({ message: 'Tarea actualizada exitosamente' });
          }
        });
      } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
      }
    }
  });
});

module.exports = router;
