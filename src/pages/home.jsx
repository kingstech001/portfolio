import { NavLink } from "react-router-dom";
import TypingAnimation from "../components/textAnimation";

const Home = () => {
  const TruncateText = ({ text, length }) => {
    const truncateText = (str, len) => {
      return str.length > len ? str.substring(0, len) + "..." : str;
    };
    const truncatedText = truncateText(text, length);
    return <p className="my-5 text-[10px] md:text-[15px]">{truncatedText}</p>;
  };
  const texts = ["Kingsley Mamah", "a Web Developer", "a Graphics Designer"];
  return (
    <>
      <div className=" flex items-center text-center justify-center h-screen text-white  bg-custom-gradient font-bold ">
        <div>
          {/* <p className="">Hello!</p> */}
          <h2 className="m-3 text-3xl"> WELCOM TO MY WEBSITE</h2>
          <h1 className="text-6xl font-bold mb-20 ">
            I'm{" "}
            <span className="text-customBlue">
              <TypingAnimation texts={texts} speed={100} />
            </span>
          </h1>
          <NavLink
            className={"bg-customBlue p-3 rounded-md font-normal text-2xl"}
            to={"contact"}
          >
            Let's Talk
          </NavLink>
        </div>
      </div>
      <div className=" p-[30px] bg-white grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] items-center gap-5 w-[100%]">
        <div className="shadow-md p-5 pb-10 mb-5 w-[100%] ">
          <h2 className="text-center text-lg font-bold border-b-2 border-customBlue w-fit ">
            About
          </h2>
          <div className="my-5 ">
            <TruncateText
              text={
                "I am a dedicated and skilled Front-End Developer with a proven track record in developing responsive"
              }
              length={70}
            />
          </div>
          <NavLink
            className={"bg-customBlue text-white p-3 rounded-md"}
            to={"about"}
          >
            Read more
          </NavLink>
        </div>
        <div className="shadow-md p-5 pb-10 mb-5 ">
          <h2 className="text-center text-lg font-bold border-b-2 border-customBlue w-fit ">
            Services
          </h2>
          <div className="my-5 ">
            <TruncateText
              text={
                "As a dedicated front-end developer, I specialize in creating dynamic, responsive, and user-friendly web applications"
              }
              length={70}
            />
          </div>
          <NavLink
            className={"bg-customBlue text-white p-3 rounded-md"}
            to={"services"}
          >
            Read more
          </NavLink>
        </div>
        <div className="shadow-md p-5 pb-10 mb-5 ">
          <h2 className="text-center text-lg font-bold border-b-2 border-customBlue w-fit ">
            Contact
          </h2>
          <div className="my-5 ">
            <TruncateText
              text={
                "Whether you need a new website, UI/UX design implementation, API integration, or performance optimization,"
              }
              length={70}
            />
          </div>
          <NavLink
            className={"bg-customBlue text-white p-3 rounded-md"}
            to={"contact"}
          >
            Read more
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
