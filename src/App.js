import React from "react"
import { Provider } from "react-redux"
import setupStore from "./redux/setupStore"
import "./styles/main.scss"

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-primary">Movie App</h1>
    </Provider>
  )
}

export default App
