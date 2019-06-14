import { createStore, applyMiddleware } from 'redux'
import { History } from 'history'
import { routerMiddleware } from 'connected-react-router'

import { composeEnhancers } from './utils'
import rootReducer from './root-reducer'

const configureStore = (history: History) => {
  const middlewares = [routerMiddleware(history)]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(rootReducer(history), enhancer)
}
export default configureStore
