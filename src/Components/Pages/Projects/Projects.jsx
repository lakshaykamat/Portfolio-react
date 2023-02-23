import React from "react";
import { projects }  from "../../../assets/projects";
const ProjectCard = (prop) =>{
  return(
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{prop.project.title}</div>
    <p className="text-gray-700 text-base">{prop.project.description}</p>
  </div>
  <div className="px-6 py-4">
    {prop.project.tags.map((item,i)=>{
      return <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
    })}
  </div>
  <div className="px-6 py-4">
  {prop.project.techStack.map((item,i)=>{
      return  <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
    })}
  </div>
  <div className="px-6 py-4">
    <a href={prop.project.demoLink} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">Live Demo</a>
    <a href={prop.project.githubLink} className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">Source Code</a>
  </div>
</div>
  )
}


const ProjectPage = () => {
  //TODO Add Projects to the project page
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;