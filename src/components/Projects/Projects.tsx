import projects from "src/data/projects.json";
import ProjectCard from "src/components/Projects/ProjectCard";
import {
  AiFillGithub as GithubIcon
} from "react-icons/ai";

const Projects = () => {

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-full border-cyan-500 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my best projects.
          </p>
        </div>
      </div>
      <div className={`projects container mx-auto ${projects.length > 0 ? "grid md:grid-cols-2 gap-20" : "flex justify-center"}`}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard project={project} />
          ))
        ) : (
          <div className="text-2xl text-center">
            Coming soon ... 🚧 <br />
            In mean time, here is my github profile <br />
            <a href="https://github.com/karimdahoumane" target="_blank" rel="noreferrer" className="text-cyan-500 hover:text-cyan-600">
              <GithubIcon className="inline-block" /> Karim Dahoumane
            </a>
          </div>
        )}
      </div>
    </section >
  );
};

export default Projects;