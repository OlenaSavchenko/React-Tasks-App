import todoReducer from './todos/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

export const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)))