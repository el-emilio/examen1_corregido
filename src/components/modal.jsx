import React from "react";

export default function Modal({ modal, onClose, children }) {

    if (modal) {
        return (
            <div className="modal-overplay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    {children}
                </div>
            </div>
        )
    }

    else {return false}


}