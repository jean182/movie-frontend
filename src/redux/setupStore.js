import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

import rootReducer from "./rootReducer"

export default function setupStore(initialState = {}) {
  let middlewares = []

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }
  const sagaMiddleware = createSagaMiddleware()

  middlewares.push(sagaMiddleware)

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
