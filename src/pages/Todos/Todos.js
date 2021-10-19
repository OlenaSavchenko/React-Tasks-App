import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosThunk } from '../../store/todos/operations';
import { getError } from "../../store/todos/selectors";
import Todolist from "../../components/TodoList/TodoList";
import Error from "../../components/Error/Error";

const Todos = () => {
    const dispatch = useDispatch()
    const error = useSelector(getError)
    useEffect(() => {
        dispatch(getTodosThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        error
            ? <Error />
            : <Todolist />
    )
}

export default Todos