"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import person from "../../../public/person.jpg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { data: session } = useSession();

  const handleShowDropdown = () => setShowDropdown(true);
  const handleHideDropdown = () => setShowDropdown(false);

  const loggedIn = false;

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h2 className="text-2xl font-bold text-green-600">ChainChronicles</h2>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {showMobileMenu ? (
              <button
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-2 py-1"
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={() => setShowMobileMenu(true)}
                className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-2 py-1"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}
          </div>
          <ul
            className={`md:flex items-center gap-4 ${
              showMobileMenu ? "flex flex-col absolute top-16 left-0 w-full bg-white z-10" : "hidden"
            } md:flex md:items-center md:gap-4 md:relative`}
          >
            {session?.user ? (
              <div className="relative">
                <Image
                  onClick={handleShowDropdown}
                  src={person}
                  alt="person"
                  width="45"
                  height="45"
                  className="rounded-full cursor-pointer"
                />
                {showDropdown && (
                  <div className="absolute top-10 right-0 bg-gray-200 p-4 rounded-md">
                    <AiOutlineClose
                      className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                      onClick={handleHideDropdown}
                    />
                    <button
                      onClick={() => {
                        signOut();
                        handleHideDropdown();
                      }}
                      className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md"
                    >
                      Logout
                    </button>
                    <Link
                      onClick={handleHideDropdown}
                      href="/create-blog"
                      className="text-gray-600 text-base font-normal"
                    >
                      Create
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    signIn();
                  }}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md"
                >
                  Log in
                </button>
                <button className="border-2 border-gray-300 px-4 py-2 rounded-md">
                  <Link href="/register">Register</Link>
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
