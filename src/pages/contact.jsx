import { useState } from "react";
import { FaEnvelope, FaHome, FaMedium, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setname("");
    setemail("");
    setmessage("");
  };
  return (
    <div className="relative text-black bg-white sm:h-screen md:h-[90vh]  pt-20 flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-xl text-center border-b-2 border-customBlue w-fit">
        let's talk
      </h2>
      <div className="md:flex m-3">
        <div>
          <div className="flex flex-col items-center shadow-md p-5 m-3">
            <FaHome className="text-customBlue" />
            Enugu State, Nigeria
          </div>
          <div className="flex flex-col items-center shadow-md p-5 m-3">
            <FaEnvelope className="text-customBlue" />
            mamahkingsleychukwuebuka@gmail.com
          </div>
          <div className="flex flex-col items-center shadow-md p-5 m-3">
            <FaPhone className="text-customBlue" />
            08071427831
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col md:text-start">
            <label className="mt-2 md:mt-0 font-medium">Enter your name:</label>
            <input
              className="border-[1px] bg-gray-50 hover:border-customBlue p-1"
              required
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <label className="mt-2 font-medium">Enter your email:</label>
            <input
            required
              className="border-[1px] bg-gray-50 hover:border-customBlue p-1"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label className="mt-3 font-medium">Enter your message:</label>
            <textarea
            required
              className="border-[1px] bg-gray-50 hover:border-customBlue px-1"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <button type="submit" className="bg-customBlue mt-5 sm:w-fit sm:block sm:mx-auto sm:p-5 text-white md:w-full md:p-2 ">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
