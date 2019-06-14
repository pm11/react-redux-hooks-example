import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

export type ReducerState = {
  router: RouterState
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  })
export default rootReducer
