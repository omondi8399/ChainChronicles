import React from "react";
import classes from "./hero.module.css";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.main}>
        <div className={classes.row}>
          <h1 className="text-4xl font-bold text-white">Discover nice Articles here</h1>
          <p className="text-lg text-white">
            All the articles are written by the community. You can also write an
            article and share it with the community.
          </p>
        </div>
        <div className={classes.row}>
          <div className={classes.icon}>
            <FaFacebookMessenger />
          </div>
          <div className={classes.icon}>
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
      <div className={classes.filters}>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <div className={classes.search}>
            <AiOutlineSearch />
          </div>
        </form>
        <nav>
          <ul className="flex flex-wrap justify-between">
            <li className={classes.active}>All</li>
            <li>Latest</li>
            <li>Popular</li>
            <li>Top</li>
            <li>Test</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;