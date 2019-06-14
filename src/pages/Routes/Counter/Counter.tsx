import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Statistic, Button } from 'semantic-ui-react'

import { ReducerState } from '../../../store/root-reducer'
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from '../../../features/counter/widget'
import * as style from './Counter.scss'

const CounterComponent = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: ReducerState) => state.counter.count)
  return (
    <div>
      <div className={style.counter}>
        <Statistic>
          <Statistic.Value>{count}</Statistic.Value>
          <Statistic.Label>Counts</Statistic.Label>
        </Statistic>
      </div>
      <Button.Group>
        <Button onClick={() => dispatch(incrementCounter())}>+1</Button>
        <Button onClick={() => dispatch(decrementCounter())}>-1</Button>
        <Button onClick={() => dispatch(resetCounter())}>Reset 0</Button>
      </Button.Group>
    </div>
  )
}

export default withRouter(React.memo(CounterComponent))
