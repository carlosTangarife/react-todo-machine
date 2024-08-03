import './TodoCounter.css';
export function TodoCounter({completed, total, finished}) {
    return finished
        ? <div  className="TodoCounter"> Has completado todas las sessiones</div>
        : <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>;
}
