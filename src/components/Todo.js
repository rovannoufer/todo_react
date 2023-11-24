import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggle_complete, delete_todo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggle_complete(task.id)}
        className={`${task.completed ? `completed` : ""}`}>
             {task.task} </p>
        <div>
           <FontAwesomeIcon icon={faPenToSquare} />
           <FontAwesomeIcon icon={faTrash} 
           onClick={() => delete_todo(task.id)} /> 
        </div>
    </div>
  )
}
