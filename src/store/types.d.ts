import { StateType } from 'typesafe-actions'
import { RouterAction } from 'connected-react-router'

import rootReducer from './root-reducer'
import { CounterAction } from '@/features/counter/widget'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = RouterAction | CounterAction
}
