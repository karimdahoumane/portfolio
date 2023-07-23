import Picture from "src/assets/images/me.webp";
import {
  AiOutlineLinkedin as LinkedinIcon,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white pt-64">
      <div className="container mx-auto grid md:grid-cols-2 justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl mb-10 lg:text-6xl">
            Hi There! 👋🏼<br />
            <br />
            I'm <span className="text-accent">Karim</span> Dahoumane<br />
            <div className="text-3xl my-5"><span className="text-accent">Dev</span>eloper</div>

          </h1>
          <a
            href="https://github.com/karimdahoumane"
            className="btn bg-accent border-2 border-[#7477FF] rounded-md text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/karimdahoumane/"
              className="pr-4 pt-20 inline-block text-accent hover:text-white"
            >
              {" "}<LinkedinIcon size={40} />{" "}
              Linkedin
            </a>
          </div>

        </div>
        <div>
          <img
            src={Picture}
            width={400}
            height={400}
            alt="coding illustration"
            className="lgw-[10%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
