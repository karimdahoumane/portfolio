import { Project } from "src/types/project";

import {
  AiOutlineGithub as GithubIcon,
  AiOutlinePlayCircle as PlayIcon,
} from "react-icons/ai";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={project.img} alt={project.title} className="w-3/4" />
        <div className="flex flex-row justify-between py-2 w-3/4 items-center">
          <div className="text-2xl font-bold">{project.title}</div>
          <div className="flex flex-row">
            <a href={project.live} className="pr-4 inline-block text-accent hover:text-white">
              {" "}<PlayIcon size={30} />{" "}
              Live
            </a>
            <a href={project.code} className="pr-4 inline-block text-accent hover:text-white">
              {" "}<GithubIcon size={30} />{" "}
              Code
            </a>
          </div>
        </div>
        <p className="w-3/4">{project.description}</p>
      </div >
    </>
  );
};

export default ProjectCard;
