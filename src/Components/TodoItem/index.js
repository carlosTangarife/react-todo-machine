import { CompleteIcon} from "../TodoIcon/CompleteIcon";
import { DeleteIcon} from "../TodoIcon/DeleteIcon";

import './TodoItem.css';

export const TodoItem = ({completed, title, deleteTodo, completeTodo}) => (
    <li className="TodoItem">
        <CompleteIcon completed={completed} onComplete={completeTodo} />
        <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>{title}</p>
        <DeleteIcon onDelete={deleteTodo} />
    </li>
)
