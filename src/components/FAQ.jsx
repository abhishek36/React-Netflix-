import React, { useState } from "react";
import { Question } from "../data/Question";

const FAQ = () => {
  let allquestions = Question;
  const [currentid, setcurrentid] = useState(Question[0].id);
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <h2 className="text-center md:text-[50px] text-[40px] font-bold text-white">
            frequently asked questions
          </h2>
          <div className="py-[30px]">
            {allquestions.map((v) => {
              return (
                <div className="bg-[#2d2d2d] mb-1">
                  <div
                    className="text-white text-[26px] p-[13px_20px] flex justify-between border-[3px] border-black  items-center hover:bg-[rgb(78,78,78)] duration-[0.3s] cursor-pointer"
                    onClick={() => setcurrentid(v.id === currentid ? 0 : v.id)}
                  >
                    {v.question}
                    <span id="pointer">{currentid === v.id ? "-" : "+"}</span>
                  </div>
                  <p id="para" className={currentid === v.id ? "showp" : ""}>
                    {v.answer}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[20px] text-white text-center">
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
              <button className="bg-[#E50914] h-[50px] capitalize text-[23px] rounded-sm hover:bg-red-800 text-white xs:w-[60%] xs:mx-auto">
                get started
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
