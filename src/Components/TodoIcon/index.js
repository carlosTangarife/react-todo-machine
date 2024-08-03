import {ReactComponent as DeleteSvg} from './delete.svg';
import {ReactComponent as CheckSvg} from './check.svg';
import './TodoIcon.css'

export const TodoIcon = ({type, color, onClick}) => {
    const iconsTypes = {
        'delete': (color) => <DeleteSvg className="Icon-svg" fill={color}/>,
        'check': (color) => <CheckSvg className="Icon-svg" fill={color}/>,
    }
    return <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
    >
        {iconsTypes[type](color)}
    </span>
}
