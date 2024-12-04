import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<ProjectDetail />} />
    </Routes>
  )
}

export default RoutesIndex