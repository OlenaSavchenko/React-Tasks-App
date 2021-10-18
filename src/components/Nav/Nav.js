import { useHistory } from 'react-router';
import { NavLink } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    const history = useHistory()
    const handleGoBackButton = () => {
        history.goBack()
    }

    return (
        <>
            <button className="btn btn-dark task-menu__btn-back" type="button" onClick={handleGoBackButton} title="Go back"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></button>
            <ul className="task-menu__list">
                <li className="task-menu__item"><NavLink className="task-menu__link" activeClassName="task-menu__link--active" to="/todo">create todo form</NavLink></li>
                <li className="task-menu__item"><NavLink className="task-menu__link" activeClassName="task-menu__link--active" to="/todos">todos</NavLink></li>
            </ul>
        </>
    )
}

export default Nav