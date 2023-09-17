const fs = require('fs');

function addTask(description) {
  return new Promise((resolve, reject) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const tasks = JSON.parse(data);
        const newTask = {
          id: tasks.length + 1,
          description: description,
          completed: false
        };
        tasks.push(newTask);

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), (err) => {
          if (err) {
            reject(err);
          } else {
            console.log('New task added:', newTask);
            resolve('Task added successfully!');
          }
        });
      }
    });
  });
}

module.exports = { addTask };
