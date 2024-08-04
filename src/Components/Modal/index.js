import './Modal.css';

import ReactDOM from "react-dom";

export const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
