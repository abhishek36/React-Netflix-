import React from "react";
import khan from "../assets/device.png";

const Watch = () => {
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1100px] mx-auto px-[10px]">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white md:text-left text-center">
              <h2 className="md:text-[50px] text-[30px] font-bold">
                watch everywhere
              </h2>
              <p className="md:text-[26px] text-[20px] pt-[15px]">
                stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <figure className="relative">
              <video className="absolute w-[60%] left-[20%] top-[10%] z-1 ">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
              </video>
              <img className="relative z-2 " src={khan} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watch;
