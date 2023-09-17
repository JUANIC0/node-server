¿Qué sucedió al usar async y await?
Al usar async y await, podemos llamar a funciones asíncronas y esperar que las promesas se resuelvan antes de continuar con la ejecución del código. Esto hace que la interacción con las funciones asíncronas sea mucho más sencilla y se asemeje a una programación síncrona, lo que hace que el código sea más legible y mantenible.

¿Qué sucedió al usar el método then()?
Al usar el método then(), podemos encadenar promesas y manejar el resultado y los errores de forma más explícita. En lugar de usar await para esperar la resolución de la promesa, utilizamos .then() para manejar el resultado cuando la promesa se resuelve correctamente y .catch() para manejar errores si la promesa es rechazada.

¿Qué diferencias encontraste entre async, await y el método then()?

async y await permiten escribir código asíncrono de manera más secuencial y legible, ya que esperan que las promesas se resuelvan antes de continuar con la ejecución del código. Esto facilita la programación y el manejo de operaciones asíncronas.

El método then() es útil para encadenar promesas y manejar los resultados y errores de forma explícita. Si bien no es tan legible como async/await, es una forma más antigua de trabajar con promesas y sigue siendo ampliamente utilizada en ciertos escenarios