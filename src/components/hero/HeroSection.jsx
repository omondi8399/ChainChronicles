import React from "react";
import classes from "./hero.module.css";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
export default function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className={classes.main}>
        <div className={classes.row}>
          <h1>Discover nice Articles here</h1>
          <p>
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
          <input type="text" placeholder="Search" />
          <div className={classes.search}>
            <AiOutlineSearch />
          </div>
        </form>
        <nav>
          <ul>
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
}
