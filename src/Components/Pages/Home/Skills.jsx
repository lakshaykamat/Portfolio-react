import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 60 },
    { name: 'Bootstrap', level: 70 },
    { name: 'Tailwind', level: 80 },
    { name: 'C', level: 70 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
              <span className="ml-4 text-gray-500 text-lg">{skill.level}%</span>
            </div>
            <div className="mt-2 w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
