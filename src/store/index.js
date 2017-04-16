import { createStore, applyMiddleware, compose } from 'redux';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

function setupStore(history) {

  const logger = createLoggerMiddleware();
  const sagaMiddleware = createSagaMiddleware();

  const reducers = connectRouter(history)(rootReducer);


  let middlewares = [routerMiddleware(history), sagaMiddleware];
  let store;
  if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
  } else {
    store = createStore(reducers, applyMiddleware(...middlewares));
  }

  sagaMiddleware.run(sagas);

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;

}

export default setupStore;
