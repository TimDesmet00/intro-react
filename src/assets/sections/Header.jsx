import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { BtnForm } from '../components/BtnForm';

export const Header = () => {
    return (
        <div className='header'>
            <Title />
            <Input type="text" name="todo" id="todo" label="ToDo:" />
            <BtnForm />
        </div>
    )
}