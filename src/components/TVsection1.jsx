import React from "react";
import tv from "../assets/tv.png";

const TVsection1 = () => {
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1100px] mx-auto px-[10px]">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white md:text-left text-center">
              <h2 className="md:text-[50px] text-[30px] font-bold">
                enjoy on your TV
              </h2>
              <p className="md:text-[26px] text-[20px] pt-[15px]">
                watch on smart TVs, playstations, Xbox, Chromecast, apple TV,
                blue-ray players and more.
              </p>
            </div>
            <figure className="relative">
              <video className="absolute w-[80%] left-[10%] top-[20%] z-1 ">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
              </video>
              <img className="relative z-2 " src={tv} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default TVsection1;
