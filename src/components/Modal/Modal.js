import { updateTodoThunk } from "../../store/todos/operations"
import { useDispatch } from 'react-redux'
import './Modal.scss'

const Modal = (props) => {
    const { task, onCloseClick } = props
    const dispatch = useDispatch()

    const handleUpdateClick = async (e) => {
        e.preventDefault()
        const formEl = e.target.closest("#add-task-form");
        const titleEl = formEl.elements["task-title"]
        const newTask = { ...task }
        newTask.title = titleEl.value
        await updateTodoThunk(newTask)(dispatch)
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
                            <textarea name="task-title" type="text" defaultValue={task.title} className="modal-textarea" />
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