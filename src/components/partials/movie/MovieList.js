import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { requestMoviesFetch } from "../../../redux/modules/movie"
import MovieListItem from "./MovieListItem"

class MovieList extends Component {
  componentDidMount() {
    const { requestMoviesFetch } = this.props
    requestMoviesFetch()
  }

  render() {
    const { data } = this.props
    const { movies, fetching, error } = data
    return (
      <div>
        {fetching ? (
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
            />
          </div>
        ) : (
          <table className="table table-hover table-bordered table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Plot</th>
                <th scope="col">Release Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!!movies && movies.length > 0 ? (
                movies.map(movie => {
                  return <MovieListItem key={movie.id} {...movie} />
                })
              ) : (
                <tr>
                  <th colSpan="4" className="text-center text-danger">
                    {error}
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      requestMoviesFetch,
    },
    dispatch
  )
}

const mapStateToProps = state => ({
  data: state.movie,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
