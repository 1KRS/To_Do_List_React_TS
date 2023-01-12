import React from 'react'
import { ITask } from '../interfaces'

interface Props {
  task: ITask
}

const ToDoTask = ({ task }: Props) => {
  return (
    <div >
      {task.taskName}
      <br/>
      {task.deadline}
    </div>
  )
}

export default ToDoTask