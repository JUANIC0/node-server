const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Llevar el coche al taller', completed: true },
  
];

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  
  res.status(201).json(newTask); 
});

app.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const updatedTask = req.body;

  res.json(updatedTask);
});

app.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  
  res.status(204).send();
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/complete', (req, res) => {
 
  res.json(completedTasks);
});

app.get('/tasks/incomplete', (req, res) => {
  res.json(incompleteTasks);
});

app.get('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  
  res.json(task);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express funcionando en el puerto ${port}`);
});
