import React from "react";
import ProjectCard from "./ProjectCard";


const ProjectPage = ({projects}) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            techStack={project.techStack}
            githubLink={project.githubLink}
            demoLink={project.demoLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
