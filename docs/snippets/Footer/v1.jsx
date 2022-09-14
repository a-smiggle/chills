import React from "react";

export default function Footer() {
  return (
    <footer className="w-full min-h-[8rem] py-4 px-4 md:px-16 gap-8 md:gap-0 bg-white dark:bg-slate-800 text-black dark:text-slate-300 shadow-inner flex flex-col md:flex-row justify-between">
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
    </footer>
  );
}
