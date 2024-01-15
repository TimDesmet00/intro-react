import { MainTitle } from "../components/MainTitle";
import { TodoList } from "../components/TodoList";

export const Mainer = () => {
    return (
        <div className="mainer">
            <MainTitle />
            <TodoList />
        </div>
    )
}