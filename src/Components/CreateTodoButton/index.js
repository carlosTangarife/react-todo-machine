import './CreateTodoButton.css';
import {useContext} from "react";
import {TodoContext} from "../TodoContext";

export function CreateTodoButton() {
    const {setOpenModal} = useContext(TodoContext);
    return <button
        className='CreateTodoButton'
        onClick={() => setOpenModal(true)}>+
    </button>;
}
