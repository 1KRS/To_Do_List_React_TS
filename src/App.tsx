import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import ToDoTask from './Components/ToDoTask';
import { ITask } from './interfaces';

const App: FC = () => {

  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState(0)
  const [todoList, setToDoList] = useState<ITask[]>([])

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.name === 'task') {
    setTask(e.target.value)
    console.log(e.target.name)
    console.log(e.target)

  } else {
    setDeadline(Number(e.target.value))
  }
};

const addTask = (): void => {
  const newTask = {
    taskName: task,
    deadline: deadline
  }
  setToDoList([...todoList, newTask])
  console.log(todoList)
  setTask('')
  setDeadline(Number(''))
}

const completeTask = (taskNameToDelete: String): void => {
 setToDoList(todoList.filter(task => task.taskName != taskNameToDelete))
}

  return (
    <div className="App">
      <h1>Κατάλογος Εργασιών</h1>
      <h6>(React & Typescript)</h6>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Εργασία...' name='task' value={task} onChange={handleChange}/>
          <input type='text' placeholder='Προθεσμία (σε Ημέρες)...' value={deadline} name='deadline' onChange={handleChange}/>
        </div>
        <button onClick={(addTask)}>Προσθήκη Εργασίας</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>
        } )}
      </div>
    </div>
  );
}

export default App;
