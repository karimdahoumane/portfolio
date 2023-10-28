import {
  AiFillLinkedin as LinkedInIcon
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-8 border-b-[5px] w-[200px] mx-auto border-rose-600">
          Contact Me
        </h2>
        <p className="pb-4">
          I am currently available for a full-time Fullstack Developer position.
          If you would like to discuss this opportunity further, please feel free to reach out to me via email, phone call, or LinkedIn.
        </p>
        <p>
          <span className="font-bold">Email:</span> krmdahoumane@gmail.com
        </p>
        <p>
          <span className="font-bold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/karimdahoumane/"
            target="_blank"
            rel="noreferrer"
            className="text-rose-600 hover:text-rose-800"
          >
            <LinkedInIcon className="inline-block" /> Karim Dahoumane
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;