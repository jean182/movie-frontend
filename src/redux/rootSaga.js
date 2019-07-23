import { all } from "redux-saga/effects"
import { dummySaga } from "./modules/dummy"
import { movieSaga } from "./modules/movie"

export default function* rootSaga() {
  yield all([dummySaga(), movieSaga()])
}
