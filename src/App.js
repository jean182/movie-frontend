import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import setupStore from "./redux/setupStore"
import AppRouter from "./AppRouter"
import "./styles/main.scss"

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  )
}

export default App
