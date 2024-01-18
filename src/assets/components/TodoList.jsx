import { useState } from "react";

export const TodoList = ({ todos, setTodos}) => {
    
    const checkboxChange =(event, index) => {
        const newTodos = [...todos];
        newTodos[index].completed = event.target.checked;
        setTodos(newTodos);

        // vérification de la valeur de l'index dans la console
        console.log(`Checkbox ${index} is checked: ${event.target.checked}`);
    }
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={(event) => checkboxChange(event, index)} />{ todo.todo }
                </li>
                ))}
            </ul>
        </div>
    );
}

