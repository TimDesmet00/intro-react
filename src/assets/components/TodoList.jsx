import { useState } from "react";

export const TodoList = () => {
    const initialTodos = [
        { text: "Learn React", completed : false },
        {text: "Be Awesome!", completed : false },
        {text: "Code a page!", completed : false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const checkboxChange =(event, index) => {
        const newTodos = [...todos];
        newTodos[index].completed = event.target.checked;
        setTodos(newTodos);

        // vérification de la valeur de l'index dans la console
        console.log(`Checkbox ${index} is checked: ${event.target.checked}`);
    }
    return (
        <div className="todoList">
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={(event) => checkboxChange(event, index)} />{ todo.text }
                </li>
                ))}
            </ul>
        </div>
    );
}

