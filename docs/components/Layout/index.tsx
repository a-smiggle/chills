import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidenav from "./Sidebar";

export default function index({ children }: { children: ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (router.pathname.includes("/snippets")) {
    return (
      <div
        className="flex flex-col text-black dark:bg-slate-800 dark:text-white"
        style={{ backgroundImage: "url(/bg2.svg)" }}
      >
        <Navbar />
        <div className="flex">
          <Sidenav />
          {children}
        </div>
      </div>
    );
  }
  if (router.pathname.includes("/install")) {
    return (
      <div
        className="flex flex-col bg-cover text-black dark:bg-slate-800 dark:text-white"
        style={{ backgroundImage: "url(/bg1.svg)" }}
      >
        <Navbar />
        {children}
      </div>
    );
  }
  return (
    <div
      className="flex flex-col bg-cover text-black dark:bg-slate-800 dark:text-white"
      style={{ backgroundImage: "url(/bg.svg)" }}
    >
      <Navbar />
      {children}
    </div>
  );
}
