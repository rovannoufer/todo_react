import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addtodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        
    };
    
    const togglecomplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo
        ))
        
    }

    const deletetodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
       
    }

    const edittodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
            ))
           
    }
    
    const edittask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
           ...todo, task, isEditing: !todo.isEditing 
        }: todo))
      
    }


    return (
         <div>
            <h1 className='login'> TO-DO 
            <FontAwesomeIcon icon={faList} style={{ marginLeft: '10px' }} />
             </h1>
            <div className='TodoWrapper'>      
            <h1>First thing’s first
            <FontAwesomeIcon icon={faList} style={{ marginLeft: '10px' }} />
            </h1> 
            
            <TodoForm add_todo={addtodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm edit_todo = {edittask} task = {todo}/>
                ) : (
                    <Todo task={todo} key={todo.id}
                    toggle_complete={togglecomplete} 
                    delete_todo = {deletetodo}
                    edit_todo = {edittodo} />
                )
            ))}
            </div>
        </div>
    );
};
