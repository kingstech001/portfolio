import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footerColor h-20 flex flex-col md:flex-row md:justify-between px-[30px] items-center justify-center">
      <p className="text-white">
        &copy; 2024 <span className="text-customBlue">King's Tech</span>. All
        rights reserved.
      </p>
      <div className="flex gap-3 mt-1 text-customBlue">
        <a href="https://github.com/kingstech001" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.Linkedin/in/mamah-kingsleychukwuebuka-830342263" target="blank">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/official_kings_tech" target="blank">
          <FaInstagram />
        </a>
        <a href="" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/kingsley.mamah.388" target="blank">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
