import React from "react";

export default function Footer() {
  return (
    <footer className="w-full min-h-[8rem] py-4 px-4 md:px-16 gap-8 md:gap-0 bg-white dark:bg-slate-800 text-black dark:text-slate-300 shadow-inner flex flex-col md:flex-row justify-between">
      <div className="w-full flex items-center">
        <div className="flex flex-col">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
          </svg>
          <p>
            Luck Pty. Ltd.
            <br />
            Providing you with luck
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col">
          <span className="text-lg font-bold pb-4">Getting Started</span>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Installation
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Setup
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Examples
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold pb-4">Company</span>
          <a className="hover:underline hover:cursor-pointer" href="#">
            About us
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Contact
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Jobs
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold pb-4">Community</span>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Github
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Slack
          </a>
          <a className="hover:underline hover:cursor-pointer" href="#">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
