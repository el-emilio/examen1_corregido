import React from "react";

export default function Modal({ modal, setModal }) {

    if (modal) {
        return (

            
            <div className="modal-overplay" onClick={() => setModal(false)}>

            </div>
        )
    }

    else {
        return false;
    }


}