import React from "react";
import mobile from "../assets/mobile.jpg";
import loading from "../assets/download.gif";
import boxshot from "../assets/boxshot.png";

const Download = () => {
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[10px]">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative md:order-1 order-2">
              <img className="relative z-2 " src={mobile} alt="" />
              <div className="sm:w-[60%] w-[80%] absolute border-gray-600 border-[3px] rounded-[17px] overflow-hidden sm:left-[20%] left-[10%] grid grid-cols-[70%_auto] sm:bottom-6 bottom-3 bg-black">
                <div className="grid grid-cols-[25%_auto] gap-3 p-[10px] items-center">
                  <img src={boxshot} alt="" />
                  <div>
                    <h3 className="text-white font-bold">stranger things</h3>
                    <p className="text-blue-500 text-[15px]">downloading...</p>
                  </div>
                </div>
                <div>
                  <img src={loading} alt="" />
                </div>
              </div>
            </figure>
            <div className="text-white md:order-2 order-1 md:text-left text-center">
              <h2 className="md:text-[50px] text-[30px] font-bold md:leading-[60px] leading-[50px]">
                download your shows to watch offline
              </h2>
              <p className="md:text-[24px] text-[20px] pt-[10px]">
                save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
