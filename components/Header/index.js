import Image from "next/image";
import React, { useState } from "react";
import punkLogo from "../../public/assets/header/cryptopunk-logo.png";
import searchIcon from "../../public/assets/header/search.png";
import themeSwitchIcon from "../../public/assets/header/theme-switch.png";

function Header() {
  return (
    <div className="p-5   flex flex-col  md:space-y-4 md:flex-row lg:flex-row justify-evenly items-center leading-3 space-x-5 space-y-1">
      <div className="text-white hidden md:block lg:block">
        <Image src={punkLogo} width={200} height={80} />
      </div>
      <div className="bg-gray-900 px-4 py-2 rounded-xl h-14  items-center flex border border-gray-700 shadow-lg w-7/12">
        <Image src={searchIcon} />
        <input
          className="ml-2 w-full outline-none text-lg flex-grow bg-transparent  text-gray-600"
          placeholder="Collection, item or user..."
        />
      </div>
      <div className="flex text-gray-600 text-xl font-semibold  space-x-5">
        <p>Drop</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className=" bg-gray-800 border border-slate-700 absolute top-5 right-8 md:relative md:right-0 lg:right-0 md:top-0 lg:top-0 lg:relative shadow-lg rounded-full items-center leading-3 p-3">
        <div>
          <Image src={themeSwitchIcon} height={30} width={30} />
        </div>
      </div>
      <button className="bg-gradient-to-r from-cyan-500 to-green-500 py-5 px-6 hover:from-green-500 hover:to-cyan-500 hover:scale-110  hover:delay-150 duration-300 ease-in-out rounded-3xl uppercase font-semibold md:w-48 lg:w-32">
        sign up
      </button>
    </div>
  );
}

export default Header;
