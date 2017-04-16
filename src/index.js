import "babel-polyfill";
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import setupStore from './store';
import MainContainer from './main/MainContainer';
import Main from './main/Main';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './assets/styles/index.scss';
import './assets/styles/font-awesome.min.css';

//(process.env.NODE_ENV === 'development') ? localStorage.debug = 'semanticUIReact:*' : void 0;
localStorage.debug = null;

const history = createBrowserHistory();
const store = setupStore(history);

// for material-ui
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <MainContainer  />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);



if(module.hot) {
  module.hot.accept();
}
