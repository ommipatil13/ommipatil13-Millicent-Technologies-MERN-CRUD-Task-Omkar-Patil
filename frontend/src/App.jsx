import React from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home"
import Create from "./components/CRUD/Create/Create"
import Update from "./components/CRUD/Update/Update"


function App() {

  return (
    <>

      {/* routing */}

      <NavBar />

      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/home' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />

        <Route path='*' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
