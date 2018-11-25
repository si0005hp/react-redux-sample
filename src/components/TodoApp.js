import React from 'react';


export default function TodoApp({ task, tasks, inputTask, addAndClearTask, redirectToError }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addAndClearTask(task)} />
      <ul>
        {tasks.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={() => redirectToError()} >Go to Error Page</button>
    </div>
  );
}
