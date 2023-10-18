import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AllCategories from './pages/AllCategories'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="AllExercises" element={<AllCategories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
