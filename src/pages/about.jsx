import {
  FaCss3,
  FaDownload,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";
import myPicture from "../assets/my picture.jpg";

const About = () => {
  return (
    <div className="text-black bg-white  p-[30px] pt-20  md:flex">
      <div className="md:flex md:flex-wrap lg:items-center lg:gap-3">
        <div className="lg:flex-1 flex flex-col items-center md:items-start text-center md:text-start md:mb-3">
          <h1 className="text-lg font-bold text-[15px] md:text-[20px]">
            Kingsley Mamah
          </h1>
          <p className="font-normal text-lg text-[15px] md:text-[20px]">
            Front-End Web Developer
          </p>
          <p className="text-[10px] md:text-[15px] my-5">
            I am a dedicated and skilled Front-End Developer with a proven track
            record in dveloping responsive and user-friendly web applications. I
            have a strong background in HTML, CSS, and JavaScript. I'm always
            looking to stay up-to-date on the latest technologies and best
            practices. My strength lies in my ability to translate designs
            concept into functional, interactive , and user-friendly interface.
            I am adapt at collaborating with cross-function teams to deliver
            seamless and performant web experiences.
          </p>
          <button className="bg-customBlue flex items-center justify-center gap-5 rounded-sm text-white text-sm font-normal w-full p-2 md:w-fit lg:w-full">
            <p>DOWNLOAD MY CV</p> <FaDownload />
          </button>
        </div>
        <img
          className="md:w-[370px] md:h-[500px] rounded-sm block m-auto"
          src={myPicture}
          alt="my picture"
        />
        <div className="flex-1">
          <h2 className="m-5 font-bold text-lg w-fit border-b-2 border-customBlue md:m-1">
            Skill
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <FaHtml5 />
              <p>HTML5</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <FaCss3 />
              <p>Css3</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <h1>JS</h1>
              <p>JavaScript</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <FaReact />
              <p>React JS</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <p>Tailwind CSS</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <FaGit />
              <p>Git</p>
            </div>
            <div className="bg-customBlue text-white flex p-5 items-center gap-5 text-[20px] rounded-sm m-1">
              <FaGithub />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
