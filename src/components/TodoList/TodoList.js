import { useState } from "react";
import { useSelector } from "react-redux"
import { getTodos } from "../../store/todos/selectors"
import TodoCard from "../TodoCard/TodoCard"
import Modal from "../Modal/Modal";
import "./TodoList.scss"

const Todolist = () => {
    const todos = useSelector(getTodos)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editedTodo, setEditetTodo] = useState({})

    const handleUpdateTodo = (id) => {
        const todoObj = todos.find(todo => todo.id === id)
        setIsModalOpen(true)
        setEditetTodo(todoObj)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <ul className="task__list">
                {todos.map(todo => <TodoCard
                    key={todo.id}
                    task={todo}
                    handleUpdateTodo={handleUpdateTodo}
                />
                )}
            </ul>
            {isModalOpen && <Modal
                onCloseClick={closeModal}
                task={editedTodo}
            />}
        </>
    )
}

export default Todolist