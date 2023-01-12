import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <h1>Κατάλογος Εργασιών</h1>
      <h6>(React & Typescript)</h6>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task...'/>
          <input type='text' placeholder='Deadline (in Days)...'/>
        </div>
        <button>Add Task</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
