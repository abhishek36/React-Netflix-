import React from "react";
import logo from "../assets/Logonetflix.png";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-[25%_auto] p-[10px] items-center">
          <figure>
            <img className="w-[149px]" src={logo} alt="" />
          </figure>
          <div className="flex justify-end gap-2">
            <div className="relative">
              <select className="border border-[#ccc] bg-black text-white px-5 capitalize py-1 rounded xs:px-0">
                <option>english</option>
                <option>hindi</option>
              </select>
              <CiGlobe className="absolute left-[7px] top-[10px] text-white xs:hidden" />
            </div>
            <button className="bg-red-600 text-white p-[4px_20px] rounded capitalize">
              sign in
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
