<<<<<<< HEAD
import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate
            modi, tempore assumenda adipisci dolor hic atque quod consequuntur
            cupiditate. Quasi, nobis veritatis!
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.col}>
            <h2>Contact</h2>
            <span>Phone +254 707 606 757</span>
            <span>Twitter: DevRojas</span>
            <span>Github: omondi8399</span>
          </div>
          <div className={classes.col}>
            <h2>Location</h2>
            <span>Continent: Africa</span>
            <span>Country: Kenya</span>
            <span>Current Location: Kenya</span>
=======
import React from 'react';
import { FaPhone, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col mb-8">
            <h2 className="text-xl font-bold text-green-500">ChainChronicles</h2>
            <p className="mt-4">
              Welcome to ChainChronicles, <br /> the community-driven app that offers a diverse collection of captivating articles. Discover and share knowledge with like-minded individuals,
              as we unite through the art of storytelling.
            </p>
          </div>
          <div className="col mb-8">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="mt-4">
              <span className="block">
                <FaPhone className="inline-block text-blue-500" /> +254 707 606 757
              </span>
              <span className="block">
                <FaTwitter className="inline-block text-blue-500" />{' '}
                <a href="https://twitter.com/DevRojas" target="_blank" rel="noopener noreferrer">
                  DevRojas
                </a>
              </span>
              <span className="block">
                <FaGithub className="inline-block text-blue-500" />{' '}
                <a href="https://github.com/omondi8399" target="_blank" rel="noopener noreferrer">
                  omondi8399
                </a>
              </span>
            </div>
          </div>
          <div className="col mb-8">
            <h2 className="text-xl font-bold">Location</h2>
            <div className="mt-4">
              <span className="block">Continent: Africa</span>
              <span className="block">Country: Kenya</span>
              <span className="block">Current Location: Kenya</span>
            </div>
>>>>>>> d29ff09a229363c91bf236aa69db025293ede9b0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
