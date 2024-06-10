import { NavLink } from "react-router-dom";
import TypingAnimation from "../components/textAnimation";

const Home = () => {
  const texts = ["Kingsley Mamah", "a Web Developer", "a Graphics Designer"];
  return (
    <>
    <div className=" flex items-center text-center justify-center h-screen text-white  bg-custom-gradient font-bold ">
      <div>
        {/* <p className="">Hello!</p> */}
        <h2 className="m-3"> WELCOM TO MY WEBSITE</h2>
        <h1 className="text-3xl font-bold mb-10 ">
          I'm{" "}
          <span className="text-customBlue">
            <TypingAnimation texts={texts} speed={100} />
          </span>
        </h1>
        <NavLink className={'bg-customBlue p-3 rounded-md'} to={"contact"}>Contact Me</NavLink>
      </div>
    </div>
    <div className=" p-5 bg-white ">
        <div className="shadow-md p-5 pb-10">
          <h2 className="text-center text-lg font-bold border-b-2 border-customBlue w-fit ">About</h2>
        <p className="my-5 text-[10px] md:text-[20px]">I am a dedicated and skilled Front-End Developer with a proven track record in dveloping responsive and user-friendly web applications. I have a strong background in HTML, CSS, and JavaScript. I'm always looking to stay up-to-date on the latest technologies and best practices... 
        </p>
        <NavLink className={'bg-customBlue text-white p-3 rounded-md'} to={'about'} >Read more</NavLink>
        </div>
      </div> 
    </>
  );
};

export default Home;
