import React from 'react'
import './App.css'
import Header from "./components/Header"
import Pages from "./components/Pages"


function App() {
  return (
    <div id="app-container">
      <Header/>
      <div id="route-container">
        <Pages/>
      </div>
    </div>
  )
}

export default App
