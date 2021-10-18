import { SET_TODOS, SET_ERROR, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './types'
const initialState = {
    todos: [],
    error: null
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return ({ ...state, todos: [...action.payload] })
        case SET_ERROR:
            return ({ ...state, error: action.payload })
        case CREATE_TODO:
            return ({ ...state, todos: [...state.todos, action.payload] })
        case DELETE_TODO:
            const filtredTodos = [...state.todos].filter(todo => todo.id !== action.payload)
            return ({ ...state, todos: filtredTodos })
        case UPDATE_TODO:
            let todos = [...state.todos]
            const index = todos.findIndex(todo => todo.id === action.payload.id)
            todos.splice(index, 1, action.payload)
            return ({ ...state, todos: todos })
        default:
            return state
    }
}

export default todoReducer