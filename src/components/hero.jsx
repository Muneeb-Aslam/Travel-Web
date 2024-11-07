import "./UI.css";
import heroVideos from "../assets/hero.mp4";

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
      </div>
    </div>
  );
};

export default HeroSection;
