
export const TodoList = () => {
    const todos = ["Learn React", "Be Awesome!"];
    return (
        <div className="todoList">
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" />{ todo }
                </li>
                ))}
            </ul>
        </div>
    );
}

