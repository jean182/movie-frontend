import { handleActions, createAction } from "redux-actions"
import { takeEvery, all } from "redux-saga/effects"

// Actions
export const DUMMY_ACTION = "movie-frontend/dummy/DUMMY_ACTION"

// Initial State
export const getInitialState = () => {
  return {
    dummy: null,
  }
}

// Reducer
const reducer = handleActions(
  {
    [DUMMY_ACTION]: (state, action) => {
      const { dummy } = action.payload
      return {
        ...state,
        dummy: dummy,
      }
    },
  },

  getInitialState()
)

export default reducer

// Action Creators
export const dummyAction = createAction(DUMMY_ACTION)

// Sagas
export function* createDummySaga(action) {
  // We'll have all the logic to call the api from here
}

// Saga
export function* dummySaga() {
  yield all([takeEvery(DUMMY_ACTION, createDummySaga)])
}
