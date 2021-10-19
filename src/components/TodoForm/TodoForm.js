import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/selectors";
import { createTodoThunk } from "../../store/todos/operations";
import "./TodoForm.scss";

const TodoForm = () => {
    const newTitleRef = useRef()
    const todos = useSelector(getTodos)
    const dispatch = useDispatch()

    const handleAddTodoClick = (e) => {
        e.preventDefault()
        const task = {
            userId: 1,
            completed: false
        }
        task.title = newTitleRef.current.value
        task.id = todos.length + 1
        newTitleRef.current.value = ""
        dispatch(createTodoThunk(task))
    }

    return (
        <>
            <form id="task-form" className="task__create-form">
                <textarea ref={newTitleRef} type="text" placeholder="Add task" name="task-title" className="task__create-textarea" />
                <button type="submit" onClick={handleAddTodoClick} className="btn btn-dark">Save</button></form>

        </>
    )
}

export default TodoForm