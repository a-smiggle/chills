import React from "react";

/**
 * Example:
 * <Phone>
    <div className="flex flex-col justify-center items-center w-full h-full">
      Hello
    </div>
  </Phone>
 */

function Phone({ children }) {
  return (
    <div className="relative w-52 h-96 border-8 border-black rounded-2xl bg-white dark:bg-slate-800">
      <div className="absolute h-16 w-2 bg-black top-14 -left-3 rounded-l"></div>
      <div className="absolute h-16 w-2 bg-black top-32 -left-3 rounded-l"></div>
      <div className="absolute h-16 w-2 bg-black top-14 -right-3 rounded-r"></div>
      <div className="absolute h-6 w-6 bg-black top-2 right-4 rounded-full"></div>
      {children}
    </div>
  );
}

export default Phone;
