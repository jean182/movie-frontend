import { all } from "redux-saga/effects"
import { dummySaga } from "./modules/dummy"

export default function* rootSaga() {
  yield all([dummySaga()])
}
