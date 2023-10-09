import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AllExercises from './pages/AllExercises'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="AllExercises" element={<AllExercises />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
