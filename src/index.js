import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import { render } from 'react-dom';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';


const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={TodoApp} />
        <Route exact path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
