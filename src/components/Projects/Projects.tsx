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
            Here is a curated collection of my top projects <br />
            While the entirety of my portfolio can be accessed on my {"  "}
            <a
              href="https://github.com/karimdahoumane/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:text-cyan-800"
            >
              <GithubIcon className="inline-block" /> Github
            </a>
          </p>
        </div>
      </div>
      <div className={`projects container mx-auto ${projects.length > 1 ? "grid sm:grid-cols-2 gap-20" : "flex justify-center"}`}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
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