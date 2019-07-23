import { combineReducers } from "redux"

import dummy from "./modules/dummy"
import movie from "./modules/movie"

const rootReducer = combineReducers({
  dummy,
  movie,
})

export default rootReducer
