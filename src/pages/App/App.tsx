import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as style from './App.scss'

import { HomePage } from '../Routes/Home/Home'

type Props = {}
const App = () => (
  <div className={style.container}>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
)
const mapStateToProps = _state => ({})
const mapDispatchToProps = _dispatch => ({})

const enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default enhanced
