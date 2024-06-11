import { FaCss3, FaGit, FaGithub, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import myPicture from "../assets/my picture.jpg";

const About = () => {
  return (
    <div className="relative top-[60px] text-black bg-white h-screen p-5">
      <div>
        <h1 className="text-lg font-bold">Kingsley Mamah</h1>
        <p className="font-normal text-lg">Front-End Web Developer</p>
        <p className="text-[10px] md:text-[20px]">
          I am a dedicated and skilled Front-End Developer with a proven track
          record in dveloping responsive and user-friendly web applications. I
          have a strong background in HTML, CSS, and JavaScript. I'm always
          looking to stay up-to-date on the latest technologies and best
          practices. My strength lies in my ability to translate designs concept
          into functional, interactive , and user-friendly interface. I am adapt
          at collaborating with cross-function teams to deliver seamless and
          performant web experiences.
        </p>
      </div>
      <img className="w-[100%] rounded-lg " src={myPicture} alt="my picture" />
      <div>
        <h2>Skill</h2>
        <div>
          <div>
            <FaHtml5 />
            <p>HTML5</p>
          </div>
          <div>
            <FaCss3 />
            <p>Css3</p>
          </div>
          <div>
            <h1>JS</h1>
            <p>JavaScript</p>
          </div>
          <div>
            <FaReact />
            <p>React JS</p>
          </div>
          <div>
            <FaGit />
            <p>Git</p>
          </div>
          <div>
            <FaGithub />
            <p>GitHub</p>
          </div>
          <div>
            
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
