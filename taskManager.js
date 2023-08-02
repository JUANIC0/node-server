const fs = require('fs');

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
