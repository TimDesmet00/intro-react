import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { BtnForm } from '../components/BtnForm';
import {useRef} from 'react';


export const Header = ({ addTodo }) => {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;
        addTodo(inputElement.value);
        inputElement.value = '';

        console.log(inputElement.value);
    }

    return (
        <div className='header'>
            <Title />
            <Input ref={inputRef} type="text" name="todo" id="todo" label="ToDo:" />
            <BtnForm  onClick={clickHandler}/>
        </div>
    )
}