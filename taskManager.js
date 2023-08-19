function addTask(description) {
  return new Promise((resolve, reject) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const tasks = JSON.parse(data);
        const newTask = {
          id: tasks.length + 1, // Incrementa el id para cada nueva tarea
          description: description,
          completed: false
        };
        tasks.push(newTask);

        fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
          if (err) {
            reject(err);
          } else {
            console.log('New task added:', newTask); // Imprime la nueva tarea en la consola
            resolve('Task added successfully!');
          }
        });
      }
    });
  });
}
