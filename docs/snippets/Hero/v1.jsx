import React from "react";

/**
 * Example:
 * <Hero />
 */

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-slate-300 dark:bg-slate-700 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Hero</h1>
      <p className="w-1/2 py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <button
        type="button"
        className="py-2 px-4 w-fit bg-blue-600 hover:bg-blue-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg active:scale-90"
      >
        Get Started
      </button>
    </div>
  );
}
