import React from "react"
import { Link } from "react-router-dom"
import { prettyDate } from "../../../utils/langHelper"

const MovieListItem = ({ id, title, plot, releaseDate }) => {
  return (
    <tr>
      <td>
        <Link to={`/movies/${id}`}>
          <h6>{title}</h6>
        </Link>
      </td>
      <td>
        <p
          className="d-inline-block text-truncate"
          style={{ maxWidth: "500px" }}
        >
          {plot}
        </p>
      </td>
      <td>
        <p>{prettyDate(releaseDate, navigator.language)}</p>
      </td>
      <td>
        <Link to={`/movies/${id}/edit`}>Edit</Link>
      </td>
    </tr>
  )
}

export default MovieListItem
