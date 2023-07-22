"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./navbar.module.css";
import person from "../../../public/person.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  const handleShowDropdown = () => setShowDropdown((prev) => true);

  const handleHideDropdown = () => setShowDropdown((prev) => false);

  const loggedIn = false;

  return (
    <div className="sticky top-0 z-50 h-16 bg-white shadow-md flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <Link href="/">
          <h2 className="text-2xl font-bold text-green-600">ChainChronicles</h2>
        </Link>
        <div className="md:flex-none ml-4 hidden md:block">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
      </div>
      <ul className="flex items-center gap-4">
        {session?.user ? (
          <div className="relative">
            <Image
              onClick={handleShowDropdown}
              src={person}
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
  );
};

export default Navbar;
