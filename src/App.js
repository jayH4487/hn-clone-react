import React from 'react'
import './App.css'
import Header from "./components/Header"
import Stories from "./components/Stories"


function App() {
  return (
    <div id="app-container">
      <Header/>
      <div id="route-container">
        <Stories/>
      </div>
    </div>
  )
}

export default App
