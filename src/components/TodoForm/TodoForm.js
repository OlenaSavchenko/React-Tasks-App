import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/selectors";
import { setTodo } from "../../api/api";
import { createTodo } from "../../store/todos/actions";
import "./TodoForm.scss"

const TodoForm = () => {
    const todos = useSelector(getTodos)
    const dispatch = useDispatch()

    const handleAddTodoClick = async (e) => {
        e.preventDefault()
        const form = e.target.closest("#task-form");
        const post = {
            userId: 1,
            completed: false
        }
        post.title = form.elements["task-title"].value
        post.id = todos.length + 1
        await addTodo(post)
        form.elements["task-title"].value = ""
    }

    const addTodo = async (obj) => {
        const newTodo = await setTodo(obj)
        dispatch(createTodo(newTodo))
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