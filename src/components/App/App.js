import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from "../Nav/Nav";
import AddTodo from "../../pages/AddTodo/AddTodo";
import Todos from "../../pages/Todos/Todos";
import NotFound from '../../pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Redirect to="/todo" />
        </Route>
        <Route exact path="/todo" component={AddTodo} />
        <Route exact path="/todos" component={Todos} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
