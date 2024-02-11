import React from "react";
import kids from "../assets/AAA.png";

const Kids = () => {
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1100px] mx-auto px-[10px]">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <figure className="md:order-1 order-2">
              <img src={kids} alt="" />
            </figure>
            <div className="text-white md:text-left text-center md:order-2 order-1">
              <h2 className="md:text-[50px] text-[30px] leading-[60px] font-bold">
                create profiles for kids
              </h2>
              <p className="md:text-[26px] leading-[33px] text-[20px] pt-[15px]">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kids;
