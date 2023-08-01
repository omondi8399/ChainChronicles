import React from "react";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import Image from "next/image";
import HeroImage from "../../../public/hero-removebg.png";
import Pattern2 from "../../../public/pattern-2.svg";
import Pattern3 from "../../../public/pattern-3.svg";

const HeroSection = () => {
  return (
    <section className="hero bg-gray-900 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none animate-float">
        <Image
          src={HeroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="absolute bottom-1/4 right-0 w-12 h-12 z-0 animate-float">
        <Image src={Pattern2} alt="Pattern" className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-1/4 w-12 h-12 z-0 animate-float">
        <Image src={Pattern3} alt="Pattern" className="w-full h-full" />
      </div>
      <div className="main p-8 relative z-10">
        <div className="row">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover nice Articles here
          </h1>
          <p className="text-lg text-white">
            All the articles are written by the community. <br />You can also write an
            article and share it with the community.
          </p>
        </div>
        <div className="row flex items-center mt-4">
          <div className="icon bg-blue-600 p-3 rounded-full mr-2">
            <FaFacebookMessenger className="text-white" />
          </div>
          <div className="icon bg-green-500 p-3 rounded-full">
            <AiOutlineWhatsApp className="text-white" />
          </div>
        </div>
      </div>
      <div className="filters p-8 mt-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <form className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-60 px-4 py-2 rounded-lg bg-gray-100 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </form>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap gap-2 md:gap-4">
            <li className="active text-white font-semibold px-4 py-2 rounded-lg border-2 border-transparent hover:border-green-500">
              All
            </li>
            <li className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-transparent hover:border-green-500">
              Latest
            </li>
            <li className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-transparent hover:border-green-500">
              Popular
            </li>
            <li className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-transparent hover:border-green-500">
              Top
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
