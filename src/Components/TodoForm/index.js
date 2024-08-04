import './index.css';
import {useContext, useState} from "react";
import {TodoContext} from "../TodoContext";

export const TodoForm = () => {
    const {addTodo, setOpenModal} = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
        closeModal()
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea onChange={(e) => setTodo(e.target.value)} placeholder="Escribe tu nuevo TODO"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button Todo-Button--cancel" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add" onClick={onSubmit}>Anadir</button>
            </div>
        </form>
    )
}
