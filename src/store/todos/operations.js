
import { getTodos } from "../../api/api";
import { setTodos, setError } from "./actions";

export const getTodosThunk = dispatch => {
    getTodos()
        .then(todos => dispatch(setTodos(todos)))
        .catch(error => dispatch(setError(error)))
}

