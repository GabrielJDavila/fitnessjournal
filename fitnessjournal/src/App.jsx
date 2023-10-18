import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AllCategories from './pages/AllCategories'
import NewEx from './pages/NewEx'
import NewCat from './components/NewCat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="AllCategories" element={<AllCategories />} />
          <Route path="NewEx" element={<NewEx />} />
          <Route path="NewCat" element={<NewCat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
