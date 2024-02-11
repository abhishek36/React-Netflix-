import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-black border-t-8 border-[#605d5d] md:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <h3 className="text-[#ffffff] text-opacity-[70.0%] text-[16px] font-bold">
            questions? call <a className="underline">000-800-919-1694</a>
          </h3>
          <div className="py-[30px] grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-3 text-[#ffffff] text-opacity-[70.0%]">
            <ul className="text-[15px] flex flex-col gap-2">
              <li>
                <a className="text-[15px] underline">FAQ</a>
              </li>
              <li>
                <a className="text-[15px] underline">investor relations</a>
              </li>
              <li>
                <a className="text-[15px] underline">privacy</a>
              </li>
              <li>
                <a className="text-[15px] underline">speed test</a>
              </li>
            </ul>
            <ul className="text-[15px] flex flex-col gap-2">
              <li>
                <a className="text-[15px] underline">help centre</a>
              </li>
              <li>
                <a className="text-[15px] underline">jobs</a>
              </li>
              <li>
                <a className="text-[15px] underline">cookie preferences</a>
              </li>
              <li>
                <a className="text-[15px] underline">legal notices</a>
              </li>
            </ul>
            <ul className="text-[15px] flex flex-col gap-2">
              <li>
                <a className="text-[15px] underline">account</a>
              </li>
              <li>
                <a className="text-[15px] underline">ways to watch</a>
              </li>
              <li>
                <a className="text-[15px] underline">corporate informations</a>
              </li>
              <li>
                <a className="text-[15px] underline">only on netflix</a>
              </li>
            </ul>
            <ul className="text-[15px] flex flex-col gap-2">
              <li>
                <a className="text-[15px] underline">media centre</a>
              </li>
              <li>
                <a className="text-[15px] underline"> terms of use</a>
              </li>
              <li>
                <a className="text-[15px] underline">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
