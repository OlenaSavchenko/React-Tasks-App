import { updateTodo } from '../../api/api'
import { updateTodo as updateTodoState } from "../../store/todos/actions"
import { useDispatch } from 'react-redux'
import './Modal.scss'

const Modal = (props) => {
    const { task, onCloseClick } = props
    const dispatch = useDispatch()

    const handleUpdateClick = async (e) => {
        e.preventDefault()
        const form = e.target.closest("#add-task-form");
        let newTask = { ...task }
        newTask.title = form.elements["task-title"].value
        await modifyTask(newTask)
        onCloseClick()
    }

    const modifyTask = async (obj) => {
        const newTask = await updateTodo(obj)
        dispatch(updateTodoState(newTask))
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