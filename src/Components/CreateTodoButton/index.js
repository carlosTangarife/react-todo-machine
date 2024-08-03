import './CreateTodoButton.css';

export function CreateTodoButton() {
    return <button
            className='CreateTodoButton'
            onClick={(e)=> console.log('click', e)}>+
            </button>;
}
