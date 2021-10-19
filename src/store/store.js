import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './todos/reducer';

export const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)))