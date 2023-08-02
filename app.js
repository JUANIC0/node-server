const readline = require('readline-sync');

let tasks = [];

function addTask() {
  const indicator = readline.question('Ingrese el indicador de la tarea: ');
  const description = readline.question('Ingrese la descripción de la tarea: ');

  tasks.push({
    indicator,
    description,
    completed: false,
  });

  console.log('Tarea agregada con éxito.');
}

function removeTask() {
  const index = readline.questionInt('Ingrese el número de la tarea que desea eliminar: ');

  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada con éxito.');
  } else {
    console.log('Número de tarea inválido.');
  }
}

function completeTask() {
  const index = readline.questionInt('Ingrese el número de la tarea que desea marcar como completada: ');

  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada con éxito.');
  } else {
    console.log('Número de tarea inválido.');
  }
}

function printTasks() {
  console.log('=== Lista de Tareas ===');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`${index}. [${status}] ${task.indicator}: ${task.description}`);
  });
  console.log('======================');
}

function main() {
  while (true) {
    console.log('\nSeleccione una opción:');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const option = readline.questionInt('Opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        removeTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        printTasks();
        break;
      case 5:
        console.log('Saliendo...');
        return;
      default:
        console.log('Opción inválida.');
    }
  }
}

main();
