import { getTodos, deleteTodo, setTodo, updateTodo } from "../../api/todos";
import { setTodos, setError, deleteTodo as deleteTodoState, createTodo, updateTodo as updateTodoState } from "./actions";

export const getTodosThunk = () => dispatch => {
    getTodos()
        .then(todos => dispatch(setTodos(todos)))
        .catch(error => dispatch(setError(error)))
}

export const deleteTodoThunk = id => async (dispatch) => {
    await deleteTodo(id)
    dispatch(deleteTodoState(id))
}

export const createTodoThunk = (obj) => async (dispatch) => {
    const newTodo = await setTodo(obj)
    dispatch(createTodo(newTodo))
}

export const updateTodoThunk = (obj) => async (dispatch) => {
    const newTodo = await updateTodo(obj)
    dispatch(updateTodoState(newTodo))
}