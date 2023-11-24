import React, { useState } from 'react'

export const EditTodoForm = ({edit_todo, task}) => {

    const [value, setValue] = useState(task.task)

    const handle_submit = e =>{
        e.preventDefault();
        edit_todo(value, task.id);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handle_submit}>
        <input type='text' className='todo-input'
        value={value} placeholder='Update the task'
        onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>
            Update
        </button>
    </form>
  )
}