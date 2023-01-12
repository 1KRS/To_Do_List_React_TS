import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState(0)
  const [todo, setToDoList] = useState([])

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.name === 'task') {
    setTask(e.target.value)
  } else {
    setDeadline(Number(e.target.value))
  }
};

const addTask = 

  return (
    <div className="App">
      <h1>Κατάλογος Εργασιών</h1>
      <h6>(React & Typescript)</h6>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Εργασία...' name='task' onChange={handleChange}/>
          <input type='text' placeholder='Προθεσμία (σε Ημέρες)...' name='deadline' onChange={handleChange}/>
        </div>
        <button>Προσθήκη Εργασίας</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
