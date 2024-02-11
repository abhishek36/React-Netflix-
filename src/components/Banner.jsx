import React from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <>
      <section className="main w-[100%] bg-center bg-cover">
        <div className="w-full  bg-[rgba(0,0,0,0.7)]">
          <Header />
          <div className="max-w-[1170px] mx-auto text-white sm:py-[160px] py-[50px] text-center">
            <h1 className="sm:text-[45px] text-[35px] font-bold">
              unlimited movies, TV shows and more
            </h1>
            <h4 className="text-[25px] py-5">
              watch anywhere. cancel anytime.
            </h4>
            <p className="text-[20px]">
              ready to watch? enter your email to create or restart your
              membership.
            </p>
            <div className="max-w-[600px] mx-auto mt-7">
              <form className="grid px-[40px] sm:grid-cols-[70%_auto] grid-cols-1 gap-2">
                <input
                  type="text"
                  placeholder="email address"
                  className="h-[50px] px-5 bg-[transparent] border-[1px] bg-[#ccc]"
                />
                <button className="bg-[#E50914] h-[50px] capitalize text-[23px] rounded-sm hover:bg-red-800 xs:w-[60%] xs:mx-auto">
                  get started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
