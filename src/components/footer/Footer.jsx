import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col">
            <h2 className="text-xl font-bold text-green-500">ChainChronicles</h2>
            <p className="mt-4">
            Welcome to ChainChronicles, <br /> the community-driven app that offers a diverse collection of captivating articles. Discover and share knowledge with like-minded individuals,
             as we unite through the art of storytelling.
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
