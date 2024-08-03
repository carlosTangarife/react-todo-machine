import {TodoIcon} from '../index';

export const CompleteIcon = ({completed, onComplete}) => {
    return <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
    />
}
