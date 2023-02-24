import React from "react";
import { projects }  from "../../../assets/projects";
import ProjectCard from "./ProjectCard";


const ProjectPage = () => {
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
