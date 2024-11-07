import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import email from "../assets/gmail.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-[80px] h-max bg-gradient-to-r from-custom-dark-1 to-custom-dark-2 flex justify-between items-center flex-wrap gap-4 py-4">
      <div className="flex justify-start items-center flex-wrap gap-4 pl-6 pb-6 sm:pb-0">
        <span className="text-white font-bold text-xl">
          Razia Jawad Travel & Tourism
        </span>
        <span className="text-white font-bold text-xl">
          <span className="pr-2">&copy;</span>
          {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex justify-center items-center gap-8 pl-6 pr-20">
        <a
          href="https://www.facebook.com/profile.php?id=61567256833020"
          target="_blank"
        >
          {" "}
          <img
            src={fb}
            alt="facebook"
            className="w-[30px] h-[30px] text-white cursor-pointer"
          />
        </a>
        <a href="" target="_blank">
          {" "}
          <img
            src={insta}
            alt="insta"
            className="w-[30px] h-[30px] text-white cursor-pointer"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+971554529776"
          target="_blank"
        >
          <img
            src={whatsapp}
            alt="email"
            className="w-[30px] h-[30px] text-white cursor-pointer bg-white rounded-full"
          />
        </a>
        <a href="mailto:raziajawadtravelllc@gmail.com" target="_blank">
          <img
            src={email}
            alt="email"
            className="w-[30px] h-[30px] text-white cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
