import Picture from "src/assets/images/me.webp";
import {
  AiOutlineLinkedin as LinkedinIcon,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white pt-12">
      <div className="container mx-auto grid md:grid-cols-2 justify-start md:justify-between">
        <div className="hero-info pb-5">
          <div className="text-4xl mb-5 text-left lg:text-7xl">
            {" < > "}
          </div>
          <div className="text-4xl text-center lg:text-6xl">
            Hi There! 👋🏼<br />
            <br />
            I'm <span className="text-accent">Karim</span> Dahoumane<br />
            <div className="text-3xl my-5">
              <span className="text-accent">Web</span><br />
              <span className="text-accent">Dev</span>eloper
            </div>
          </div>
          <div className="text-4xl mb-5 text-right lg:text-7xl">
            {" < / > "}
          </div>
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
        <div className="absolute mr-10 self-end flex flex-col items-center justify-end md:relative">
          <img
            src={Picture}
            alt="coding illustration"
            className="w-[30%] ml-auto sm:w-[35%] md:w-full md:max-w-[250px] lg:w-full lg:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;