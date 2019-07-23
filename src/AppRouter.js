import React from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./components/partials/Header"
import HomePage from "./components/pages/HomePage"
import MoviePage from "./components/pages/MoviePage"

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviePage} />
      </Switch>
    </div>
  )
}

export default AppRouter
