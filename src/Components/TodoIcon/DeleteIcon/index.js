import {TodoIcon} from '../index';

export const DeleteIcon = ({onDelete}) => {
    return <TodoIcon
        type='delete'
        color='gray'
        onClick={onDelete}
    />
}
