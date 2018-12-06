import React , { Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import * as models from './models'

const store = init({
    models
  });

const history = createBrowserHistory();
  
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <App />
      </Router>
    </Suspense>
  </Provider> 
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
