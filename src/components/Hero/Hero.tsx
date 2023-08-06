import Picture from "src/assets/images/me.webp";
import LightPicture from "src/assets/images/me-light.avif";
import ProgressiveImage from "react-progressive-graceful-image";
import {
  AiOutlineLinkedin as LinkedinIcon
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 min-h-screen text-white flex flex-col justify-end">
      <div className="container mx-auto grid md:grid-cols-2 md:justify-between">
        <div className="pb-5 text-center md:text-left">
          <div className="mb-36 text-4xl lg:text-6xl">
            Hi There! 👋🏼<br />
            <br />
            I'm <span className="text-accent">Karim</span> Dahoumane <br />
            <div className="text-3xl my-5">
              <span className="text-accent">Web</span><br />
              <span className="text-accent">Dev</span>eloper
            </div>
          </div>
          <div className="flex justify-start">
            <a
              href="https://www.linkedin.com/in/karimdahoumane/"
              className="pr-4 pt-20 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {" "}<LinkedinIcon size={40} />{" "}
              Linkedin
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mr-10 md:ml-auto">
          <ProgressiveImage src={Picture} placeholder={LightPicture}>
            {(src: string) => (
              <img
                src={src}
                alt="Karim Dahoumane"
                className="w-[30%] ml-auto sm:w-[35%] md:w-full md:max-w-[250px] lg:w-full lg:max-w-[350px]"
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </div>
      </div>
    </section>
  );
};

export default Hero;
