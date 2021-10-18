import { useDispatch } from "react-redux";
import { deleteTodo } from "../../api/api";
import { deleteTodo as deleteTodoState } from '../../store/todos/actions'
import "./TodoCard.scss"

const TodoCard = (props) => {
    const { task: { id, title }, handleUpdateTodo } = props
    const dispatch = useDispatch()

    const handleDeleteTodo = () => {
        deleteTodo(id)
        dispatch(deleteTodoState(id))
    }

    return (<li className="task__item">
        <button type="button" onClick={handleDeleteTodo} className="task__delete-btn" title="Delete task">&times;</button>
        <button type="button" onClick={() => handleUpdateTodo(id)} className="btn task__edit-btn" title="Edit task">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square task__edit-svg" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
        </button>
        <p>{title}</p>
    </li>)

}

export default TodoCard