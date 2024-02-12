import React from 'react'
import {Button} from 'react-bootstrap'
import '../styles/DeleteModal.css'
import useAuth from '../hooks/useAuth'

const DeleteModal = ({handleClose}) => {

    const {handleDelete} = useAuth()
    
    return (
        <div className='DeleteModalContainer'>
            <h1>Are You Sure?</h1>
            <span className="deleteIcon material-icons material-icons-round">
                delete
            </span>
            <div className='DeleteModalContainer__buttons'>
                <Button className='DeleteModalContainer__buttons--danger' variant="outline-danger" onClick={(e) => handleDelete(e)}>Delete</Button>{' '}
                <Button className='DeleteModalContainer__buttons--success' variant="outline-success" onClick={handleClose}>Back</Button>{' '}
            </div>
        </div>
    )
}

export default DeleteModal