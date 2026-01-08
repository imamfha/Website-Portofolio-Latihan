
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link}
      className="group bg-white p-5 rounded-[20px] flex flex-col gap-4 transition-all hover:bg-white/50"
    >
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(120,125,130,0.1)]">
        <video 
          src={project.videoUrl} 
          loop 
          muted 
          playsInline 
          autoPlay
          className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
        />
      </div>
      <div className="flex justify-between items-center px-1">
        <h3 className="text-[#191c1f] text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
          {project.title}
        </h3>
        {project.number && (
          <span className="text-[#787d82]/40 text-2xl md:text-3xl font-extrabold tracking-tight">
            {project.number}
          </span>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
