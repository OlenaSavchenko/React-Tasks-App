import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/selectors";
import { createTodoThunk } from "../../store/todos/operations"
import "./TodoForm.scss"

const TodoForm = () => {
    const todos = useSelector(getTodos)
    const dispatch = useDispatch()

    const handleAddTodoClick = async (e) => {
        e.preventDefault()
        const formEl = e.target.closest("#task-form");
        const titleEl = formEl.elements["task-title"]
        const task = {
            userId: 1,
            completed: false
        }
        task.title = titleEl.value
        task.id = todos.length + 1
        titleEl.value = ""
        await createTodoThunk(task)(dispatch)
    }

    return (
        <>
            <form id="task-form" className="task__create-form">
                <textarea type="text" placeholder="Add task" name="task-title" className="task__create-textarea" />
                <button type="submit" onClick={handleAddTodoClick} className="btn btn-dark">Save</button></form>

        </>
    )
}

export default TodoForm