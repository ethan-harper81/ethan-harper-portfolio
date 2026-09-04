
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <div
        className="
          fixed bottom-6 left-6 z-50
          text-xs uppercase tracking-[0.18em]
          text-amber-50/60
          transition-colors
          hover:text-amber-50
        "
      >
        Created by Ethan Harper
      </div>
    </>
  )
}

export default App
