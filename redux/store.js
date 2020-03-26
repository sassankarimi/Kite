import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import rootSaga from './sagas'

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware)
}

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store;
}

export default configureStore
