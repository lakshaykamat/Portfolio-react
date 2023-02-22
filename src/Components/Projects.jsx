import React from 'react';

const Project = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="flex justify-center space-x-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus, urna eget viverra volutpat, enim odio molestie ex, ut interdum leo nibh eu urna. Donec viverra, dui id maximus dapibus, ex mi posuere mi, non pellentesque eros lorem in tellus.',
      imageUrl: 'https://via.placeholder.com/800x400',
      liveUrl: 'https://www.example.com',
      githubUrl: 'https://github.com/example/project-1',
    },
    {
      title: 'Project 2',
      description:
        'Donec viverra, dui id maximus dapibus, ex mi posuere mi, non pellentesque eros lorem in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus, urna eget viverra volutpat, enim odio molestie ex, ut interdum leo nibh eu urna.',
      imageUrl: 'https://via.placeholder.com/800x400',
      liveUrl: null,
      githubUrl: 'https://github.com/example/project-2',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap mx-4">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
