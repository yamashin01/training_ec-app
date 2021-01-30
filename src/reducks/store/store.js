import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

// Import reducers
import {ProductsReducer} from '../products/reducers';
// import {UserReducer, UsersReducer} from '../users/reducers';
import {UsersReducer} from '../users/reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}