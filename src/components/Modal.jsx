import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/Modal.css'


export default function Modal ( { children, change}){
    React.useEffect(() => {
        if (change === true) {
            let modal = document.getElementsByClassName('modalBackground');
            modal[0].style.backgroundColor = "transparent";
        }
    }, [])

    return ReactDOM.createPortal(
        <div className="modalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}