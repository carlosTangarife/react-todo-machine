import './TodoCounter.css';
import {useContext} from "react";
import {TodoContext} from "../TodoContext";

export function TodoCounter() {
    const {totalCompleted, totalTodos, totalIsFinished} = useContext(TodoContext);
    return totalIsFinished
        ? <div className="TodoCounter"> Has completado todas las sessiones</div>
        : <h1 className="TodoCounter">Has completado <span>{totalCompleted}</span> de <span>{totalTodos}</span> TODOs
        </h1>;
}
