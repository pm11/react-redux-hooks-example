import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'
import './global.scss'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { History, createBrowserHistory } from 'history'

import { configureStore } from './store'
import App from './pages/App/App'

const history: History = createBrowserHistory()
const store = configureStore(history)
const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

render(root, document.getElementById('root'))
