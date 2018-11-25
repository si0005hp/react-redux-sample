import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import tasksReducer from '../reducers/tasks';
import storageMiddleware from '../middleware';
import thunk from 'redux-thunk';


const savedState = JSON.parse(localStorage.getItem('app-state'));

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer,
    }),
    savedState ? savedState : tasksReducer(undefined, { type: 'Init' }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      storageMiddleware,
      thunk
    )
  );
}
