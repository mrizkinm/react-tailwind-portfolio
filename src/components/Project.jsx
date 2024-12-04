import React from 'react'
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <div id="project" className="w-full px-5 py-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">Project</p>
        <h2 className="py-4">What I've Done</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem title="Project 1" backgroundImg="/assets/project1.jpg" url="/project" projectType="React JS" />
          <ProjectItem title="Project 2" backgroundImg="/assets/project2.jpg" url="/project" projectType="Next JS" />
          <ProjectItem title="Project 3" backgroundImg="/assets/project3.jpg" url="/project" projectType="Laravel" />
          <ProjectItem title="Project 4" backgroundImg="/assets/project4.jpg" url="/project" projectType="Codeigniter" />
        </div>
      </div>
    </div>
  )
}

export default Project