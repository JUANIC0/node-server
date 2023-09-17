const express = require('express');
const router = express.Router();
const fs = require('fs');

// Ruta para listar tareas completas
router.get('/complete', (req, res) => {
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error al leer el archivo de tareas' });
    } else {
      const tasks = JSON.parse(data);
      const completedTasks = tasks.filter(task => task.completed);
      res.json(completedTasks);
    }
  });
});

// Ruta para listar tareas incompletas
router.get('/incomplete', (req, res) => {
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error al leer el archivo de tareas' });
    } else {
      const tasks = JSON.parse(data);
      const incompleteTasks = tasks.filter(task => !task.completed);
      res.json(incompleteTasks);
    }
  });
});

module.exports = router;
