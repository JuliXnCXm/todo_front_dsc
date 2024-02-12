import React from 'react'
import '../styles/Message.css'


const Message = ({error}) => {

    return (
        <>
            <div id="message"> {
                error ?
                <span id="errorIcon" className="material-icons material-icons-two-tone">
                    error
                </span>
                :
                <span id="loadingIcon" class="material-icons material-icons-outlined">
                    autorenew
                </span>
                }
            </div>
        </>
    )
}

export default Message