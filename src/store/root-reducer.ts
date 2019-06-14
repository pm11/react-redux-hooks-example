import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

import { CounterState, countersReducers } from '../features/counter/widget'

export type ReducerState = {
  router: RouterState
  counter: CounterState
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    counter: countersReducers
  })
export default rootReducer
