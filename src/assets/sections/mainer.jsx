import { MainTitle } from "../components/MainTitle";
import { TodoList } from "../components/TodoList";
import { useState } from "react";

export const Mainer = ({todos, setTodos}) => {

    return (
        <div className="mainer">
            <MainTitle />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}