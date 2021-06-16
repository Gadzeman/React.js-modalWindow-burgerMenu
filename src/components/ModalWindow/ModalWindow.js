import React from 'react';
import "./ModalWindow.css"

const ModalWindow = ({active, setActive}) => {
    return (
        <div className={active ? "modal modal-active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal-content modal-content-active" : "modal-content"} onClick={e => e.stopPropagation()}>
                <h1>Sign in</h1>
            </div>
        </div>
    );
};

export default ModalWindow;