import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as style from './App.scss'
import Counter from '@/pages/Routes/Counter/Counter'

const App = () => (
  <div className={style.container}>
    <Switch>
      <Route exact path="/" component={Counter} />
    </Switch>
  </div>
)
export default App
