import React, { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes no botão</p>
      <button onClick={() => setCount(count + 1)}>Incrementar cliques</button>
      <button onClick={() => setCount(count - 1)}>Decrementar cliques</button>
    </div>
  );
};

const exampleTasks = [
  { id: 1, text: "Ir ao supermercado" },
  { id: 2, text: "Ler um livro" },
  { id: 3, text: "Finalizar relatório" },
];

const TaskList = ({ tasks }) => {
  //[{id: 1, text: "Texto da tarefa"}, {}, ...]
  if (tasks.length === 0) {
    return <p>Não há tarefas para mostrar.</p>;
  }
  return (
    // <ol>
    //   {tasks.map((tarefa, id) => (
    //     <li key={id}>{tarefa.text}</li>  //Utilizando o index do map
    //   ))}
    // </ol>
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li> //Utilizando o próprio id do objeto
      ))}
    </ol>
  );
};

const Exercises = () => {
  return (
    <div>
      <h1>Exercícios</h1>
      <h2>Exercício 2</h2>
      <Couter />
      <h2>Exercício 3</h2>
      <TaskList tasks={exampleTasks} />
    </div>
  );
};

export default Exercises;
