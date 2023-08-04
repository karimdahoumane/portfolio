import { Project } from "src/types/project";
import {
  AiOutlineGithub as GithubIcon,
  AiOutlinePlayCircle as PlayIcon,
} from "react-icons/ai";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={require('src/assets/images/' + project.img)}
          alt={project.title}
          className="w-4/5 h-64 min rounded-md shadow-md"
        />
        <div className="flex flex-row justify-between py-2 w-3/4 items-center">
          <div className="text-2xl mr-6 font-bold">{project.title}</div>
          <div className="flex flex-row">
            {project.live && (
              <a href={project.live} className="pr-4 inline-block text-accent hover:text-white">
                {" "}<PlayIcon size={30} />{" "}
                Live
              </a>
            )}
            <a href={project.code} className="pr-4 inline-block text-accent hover:text-white">
              {" "}<GithubIcon size={30} />{" "}
              Code
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-start py-2 w-3/4">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="text-xs px-2 py-1 bg-accent text-white rounded-md mr-2 mb-2"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="w-3/4">{project.description}</p>
      </div >
    </>
  );
};

export default ProjectCard;
