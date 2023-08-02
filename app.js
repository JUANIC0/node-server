const fs = require('fs');
const { addTask, deleteTask, completeTask } = require('./taskManager');


function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
      resolve(randomNumber);
    }, 3000);
  });
}

module.exports = getRandomNumber;

// Ahora, también implementaremos las funciones de la lista de tareas con promesas
function addTask(task) {
  return new Promise((resolve, reject) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const tasks = JSON.parse(data);
        tasks.push(task);

        fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve('Task added successfully!');
          }
        });
      }
    });
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const tasks = JSON.parse(data);
        if (index >= 0 && index < tasks.length) {
          tasks.splice(index, 1);

          fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
            if (err) {
              reject(err);
            } else {
              resolve('Task deleted successfully!');
            }
          });
        } else {
          reject(new Error('Invalid task index!'));
        }
      }
    });
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const tasks = JSON.parse(data);
        if (index >= 0 && index < tasks.length) {
          tasks[index].completed = true;

          fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
            if (err) {
              reject(err);
            } else {
              resolve('Task marked as completed!');
            }
          });
        } else {
          reject(new Error('Invalid task index!'));
        }
      }
    });
  });
}

module.exports = { addTask, deleteTask, completeTask };