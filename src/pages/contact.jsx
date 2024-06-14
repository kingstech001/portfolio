import { FaEnvelope, FaHome, FaMedium, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="relative text-black bg-white h-[90vh] pt-20 flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-xl text-center border-b-2 border-customBlue w-fit">Let's Talk</h2>
      <div className="mb-10 md:flex flex-wrap">
        <div className="flex flex-col items-center shadow-md p-5 m-3">
          <FaHome className="text-customBlue"/>
          Enugu State, Nigeria
        </div>
        <div className="flex flex-col items-center shadow-md p-5 m-3">
          <FaEnvelope className="text-customBlue"/>
          mamahkingsleychukwuebuka@gmail.com
        </div>
        <div className="flex flex-col items-center shadow-md p-5 m-3">
          <FaPhone className="text-customBlue"/>
          08071427831
        </div>
      </div>
    </div>
  )
}

export default Contact