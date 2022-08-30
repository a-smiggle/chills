import React from "react";

function Phone({ children }) {
  return (
    <div className="relative m-4 w-72 h-full border-8 border-black rounded-2xl">
      <div className="absolute h-16 w-2 bg-black top-14 -left-3 rounded-l"></div>
      <div className="absolute h-16 w-2 bg-black top-32 -left-3 rounded-l"></div>
      <div className="absolute h-16 w-2 bg-black top-14 -right-3 rounded-r"></div>
      <div className="absolute h-6 w-6 bg-black top-2 right-4 rounded-full"></div>
      {children}
    </div>
  );
}

export default Phone;
