import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import createBrowserHistory from 'history/createBrowserHistory'
import createStore from './createStore'
import { ConnectedRouter } from 'react-router-redux'


const history = createBrowserHistory()

const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)