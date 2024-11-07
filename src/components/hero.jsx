import "./UI.css";
import heroVideos from "../assets/hero.mp4";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import email from "../assets/gmail.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video src={heroVideos} autoPlay muted loop />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-extrabold">
          Travel AWAITS
        </h1>
        <p className="text-xl sm:text-2xl lg:text-4xl text-white font-extrabold">
          WHAT ARE YOU WAITING FOR?
        </p>
        <div className="flex justify-center items-center gap-8">
          <a href="">
            {" "}
            <img
              src={fb}
              alt="facebook"
              className="w-[60px] h-[60px] text-white cursor-pointer"
            />
          </a>
          <a href="">
            {" "}
            <img
              src={insta}
              alt="insta"
              className="w-[60px] h-[60px] text-white cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={email}
              alt="email"
              className="w-[60px] h-[60px] text-white cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
