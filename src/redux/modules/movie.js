import { all, put, call, takeLatest } from "redux-saga/effects"
import { handleActions, createAction } from "redux-actions"
import { fetchMoviesData } from "../../api/movie"

// Actions
export const FETCH_MOVIES = "movie-frontend/movie/FETCH_MOVIES"
export const FETCH_MOVIES_SUCCEEDED =
  "movie-frontend/movie/FETCH_MOVIES_SUCCEEDED"
export const FETCH_MOVIES_FAILED = "movie-frontend/movie/FETCH_MOVIES_FAILED"

// Initial State
export const getInitialState = () => {
  return {
    fetching: false,
    movies: [],
    error: null,
  }
}

// Reducer
const movieReducer = handleActions(
  {
    [FETCH_MOVIES]: state => {
      return {
        ...state,
        fetching: true,
        error: null,
      }
    },
    [FETCH_MOVIES_SUCCEEDED]: (state, action) => {
      const { data } = action.payload
      return {
        ...state,
        fetching: false,
        movies: data,
      }
    },
    [FETCH_MOVIES_FAILED]: (state, action) => {
      const message = action.payload
      return {
        ...state,
        fetching: false,
        error: message,
      }
    },
  },
  getInitialState()
)

// Action Creators
export default movieReducer

export const requestMoviesFetch = createAction(FETCH_MOVIES)

export const succeededMoviesFetch = createAction(FETCH_MOVIES_SUCCEEDED)

export const failedMoviesFetch = createAction(FETCH_MOVIES_FAILED)

// Sagas
export function* fetchMoviesSaga() {
  try {
    const payload = yield call(fetchMoviesData)
    yield put(succeededMoviesFetch(payload))
  } catch (error) {
    yield put(failedMoviesFetch(error.message))
  }
}

// Main Saga
export function* movieSaga() {
  yield all([takeLatest(FETCH_MOVIES, fetchMoviesSaga)])
}
