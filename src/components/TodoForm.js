import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handle_submit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handle_submit}>
        <input type='text' className='todo-input'
        value={value} placeholder='What is the task today'
        onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>
            Add task
        </button>
    </form>
  )
}
