import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  checkoutReducer,
  sessionReducer,
} from '@b2storefront/b2s_core/dist/reducers'

const reducer = combineReducers({
  checkout: checkoutReducer,
  session: sessionReducer,
})

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  // Redux logger MUST BE the last middleware
  // const { logger } = require('redux-logger')
  // middlewares.push(logger)
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
