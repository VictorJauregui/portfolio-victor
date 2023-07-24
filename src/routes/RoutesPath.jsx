import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Experience from '../pages/Experience'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'


const RoutesPath = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>

    </div>

  )
}

export default RoutesPath