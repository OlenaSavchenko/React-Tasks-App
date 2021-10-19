import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { updateTodoThunk } from "../../store/todos/operations";
import './Modal.scss';

const Modal = (props) => {
    const titleRef = useRef()
    const { task, onCloseClick } = props
    const dispatch = useDispatch()

    const handleUpdateClick = (e) => {
        e.preventDefault()
        const newTask = { ...task }
        newTask.title = titleRef.current.value
        dispatch(updateTodoThunk(newTask))
        onCloseClick()
    }

    return (
        <>
            <div className="modal-box">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit task</h2>
                        <button className="modal-close-icon" onClick={onCloseClick}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="add-task-form" className="modal-form">
                            <textarea ref={titleRef} name="task-title" type="text" defaultValue={task.title} className="modal-textarea" />
                            <button className="btn btn-dark" type="submit" onClick={handleUpdateClick}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onCloseClick}></div>
        </>
    )
}



export default Modal