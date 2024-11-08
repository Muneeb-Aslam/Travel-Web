import dubai from "../assets/dubai.jpg";
import abudhabi from "../assets/abudhabii.jpg";
import sharjah from "../assets/sharjah.jpg";

const Cities = () => {
  return (
    <section className="bg-white py-8 md:py-20 px-6 md:px-12">
      <h3 className="text-black text-xl sm:text-2xl md:text-4xl font-bold pb-2">
        Popular Cities to Visit
      </h3>
      <hr className="w-full bg-gray-200" />

      <div className="pt-8 w-full flex justify-start items-center flex-wrap gap-20">
        <div className="h-[400px] w-[500px] bg-white shadow-2xl rounded-2xl flex flex-col justify-start items-start">
          <img
            src={dubai}
            alt=""
            className="w-full h-[330px] object-cover aspect-square"
          />
          <h3 className="text-black text-2xl font-bold pl-6 pt-4">Dubai</h3>
        </div>
        <div className="h-[400px] w-[500px] bg-white shadow-2xl rounded-2xl flex flex-col justify-start items-start">
          <img
            src={abudhabi}
            alt=""
            className="w-full h-[330px] object-cover aspect-square"
          />
          <h3 className="text-black text-2xl font-bold pl-6 pt-4">Abu Dhabi</h3>
        </div>
        <div className="h-[400px] w-[500px] bg-white shadow-2xl rounded-2xl flex flex-col justify-start items-start">
          <img
            src={sharjah}
            alt=""
            className="w-full h-[330px] object-cover aspect-square"
          />
          <h3 className="text-black text-2xl font-bold pl-6 pt-4">Sharjah</h3>
        </div>
      </div>
    </section>
  );
};

export default Cities;
