import API from "./api"

export const fetchMoviesData = () => {
  return API.get("/movies/")
}
