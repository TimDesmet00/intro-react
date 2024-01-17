import { useState } from "react";

export const TodoList = () => {
    const initialTodos = ["Learn React", "Be Awesome!"];
    const [todos, setTodos] = useState(initialTodos);
    const checkboxChange =(event, index) => {
        console.log(`Checkbox ${index} is checked: ${event.target.checked}`);
    }
    return (
        <div className="todoList">
            <ul>
                {initialTodos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" onChange={(event) => checkboxChange(event, index)} />{ todo }
                </li>
                ))}
            </ul>
        </div>
    );
}

