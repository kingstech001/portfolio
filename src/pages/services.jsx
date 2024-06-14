import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className=" text-black bg-white h-screen p-[40px] pt-5 md:flex md:flex-col md:items-center md:justify-center gap-20">
      <h2 className="font-bold text-xl text-center border-b-2 border-customBlue w-fit">What I Offer</h2>
      <div className="md:flex gap-5">
        <div className="text-center shadow-md p-5 hover:text-customBlue">
          <h2 className="font-bold text-lg mb-5 ">
            Web Development
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ab soluta laborum. Laborum aliquam quod accusamus cupiditate, provident incidunt vero sed facilis a distinctio corporis veniam iure! Debitis, tempora.</p>
        </div>
        <div className="text-center shadow-md p-5 hover:text-customBlue">
          <h2 className="font-bold text-lg mb-5">
            Graphics Design
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ab soluta laborum. Laborum aliquam quod accusamus cupiditate, provident incidunt vero sed facilis a distinctio corporis veniam iure! Debitis, tempora.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
