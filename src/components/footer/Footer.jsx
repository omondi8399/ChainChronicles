import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col">
            <h2 className="text-xl font-bold">About the App</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate modi,
              tempore assumenda adipisci dolor hic atque quod consequuntur cupiditate.
              Quasi, nobis veritatis!
            </p>
          </div>
          <div className="col">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="mt-4">
              <span className="block">Phone: +254 707 606 757</span>
              <span className="block">Twitter: DevRojas</span>
              <span className="block">Github: omondi8399</span>
            </div>
          </div>
          <div className="col">
            <h2 className="text-xl font-bold">Location</h2>
            <div className="mt-4">
              <span className="block">Continent: Africa</span>
              <span className="block">Country: Kenya</span>
              <span className="block">Current Location: Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
