
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

import {projects} from "./components/projects"
import Project from './pages/Project'
import WorkInProgress from './pages/WIP'

function App() {


  return (
    <>
      <BrowserRouter basename="/ethan-harper-portfolio">
        <Routes>
          {projects.map((project, index) => (
            <Route key={index} path={project.path} element={
              <Project 
                title={project.title}
                subtitle={project.subtitle}
                year={project.year}
                role={project.role}
                tech={project.tech}
                problem={project.problem}
                highlights={project.highlights}
                images={project.images}
                sourceUrl={project.sourceUrl}
                sourceLabel={project.sourceLabel}
              />
            } />
          ))}
          <Route path="/work-in-progress" element={<WorkInProgress />} />
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
