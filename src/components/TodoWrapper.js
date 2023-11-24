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

    useEffect(() => {
        const storedTodos = JSON.parse(sessionStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, [])
    
    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    useEffect(() => {
        show_task()
    }, [])

    const addtodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        save_data()
    }
    
    const togglecomplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo
        ))
        save_data()
    }

    const deletetodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        save_data()
    }

    const edittodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
            ))
            save_data()
    }
    
    const edittask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
           ...todo, task, isEditing: !todo.isEditing 
        }: todo))
        save_data()
    }

    const save_data = () => {
        sessionStorage.setItem('data', JSON.stringify(todos.map((todo) => todo.task)))
    }


    const show_task = () => {
        const storedTasks = JSON.parse(sessionStorage.getItem('data')) || [];
        setTodos(storedTasks.map((task) => ({ id: uuidv4(), task, completed: false, isEditing: false })))
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
