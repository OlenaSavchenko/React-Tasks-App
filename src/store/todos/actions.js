import { SET_TODOS, SET_ERROR, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './types'

export const setTodos = data => {
    return { type: SET_TODOS, payload: data }
}

export const setError = err => {
    return { type: SET_ERROR, payload: err }
}

export const createTodo = data => {
    return { type: CREATE_TODO, payload: data }
}

export const deleteTodo = id => {
    return { type: DELETE_TODO, payload: id }
}

export const updateTodo = data => {
    return { type: UPDATE_TODO, payload: data }
}