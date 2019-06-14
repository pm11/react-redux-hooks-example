import { combineReducers } from 'redux'
import { ActionType, action } from 'typesafe-actions'

// constants
const COUNTER_INCREMENT = 'counters/INCREMENT'
const COUNTER_DECREMENT = 'counters/DECREMENT'
const COUNTER_RESET = 'counters/RESET'

// actions
const incrementCounter = () => action(COUNTER_INCREMENT)
const decrementCounter = () => action(COUNTER_DECREMENT)
const resetCounter = () => action(COUNTER_RESET)
const actions = {
  incrementCounter,
  decrementCounter,
  resetCounter
}
type CounterAction = ActionType<typeof actions>

// reducers
type CounterState = {
  readonly count: number
}
const countersReducers = combineReducers<CounterState, CounterAction>({
  count: (state = 0, act) => {
    switch (act.type) {
      case COUNTER_INCREMENT:
        return state + 1
      case COUNTER_DECREMENT:
        return state - 1
      case COUNTER_RESET:
        return 0
      default:
        return state
    }
  }
})

export {
  CounterState,
  CounterAction,
  countersReducers,
  incrementCounter,
  decrementCounter,
  resetCounter
}
