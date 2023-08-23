"use client";
import Link from "next/link";
import React from "react";
import { links } from "./common";

const Navbar = () => {
  return (
    <div className="min-h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl">
        Endurence
      </Link>
      <div className="hidden sm:block">
        {links?.map((link) => {
          return (
            <Link href={link?.url} className="ml-6" key={link?.id}>
              {link?.title}
            </Link>
          );
        })}
        <button
          onClick={() => {
            console.log("Logout");
          }}
          className="ml-6 px-2 py-1 border-none bg-purple-500 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
