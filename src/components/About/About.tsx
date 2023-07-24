import PictureGif from "src/assets/images/hand-coding.gif"

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <div className="text-4xl font-bold mb-5 border-b-[5px] w-full border-rose-600 pb-2">
            About Me
          </div>
          <div className="text-xl mb-5 pb-2">
            <p className="pb-5">
              Hello, my name is Karim Dahoumane. <br />
              I have recently graduated after completing two bachelor's degrees in Computer Science and a Master's in Web Engineering.
              Over the last three years, I gained valuable experience through a 3-year apprenticeship in 3 different companies with a different mission for each.
            </p>
            <p className="pb-5">
              Throughout my academic projects and professional experiences,
              I have worked with various programming languages such as Java and JavaScript,
              as well as several frameworks including Spring and Vue. However,
              I am most proficient in JavaScript, with technologies like React, NestJS, Node.js, and Express.js.
            </p>
          </div>
        </div>

        <div className="about-img text-center lgw-[80%] md:ml-auto relative">
          <img
            src={PictureGif}
            alt="Gif of a hand coding"
            loading="lazy"
          />
          <a href="https://storyset.com/work"
            className="h-2 text-sm absolute bottom-0 right-0 transform rotate-90 origin-bottom-right">
            Work illustrations by Storyset</a>
        </div>
      </div>
    </section>
  );
};

export default About;