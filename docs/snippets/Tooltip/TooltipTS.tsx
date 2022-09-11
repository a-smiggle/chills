import React, { ReactNode } from "react";

/** EXAMPLE:
   <div className="group relative inline-block bg-red-500 text-white p-2 rounded">
      Hover
      <Tooltip>
        Yay you hovered over me.
      </Tooltip>
    </div>
 */

export default function TooltipTS({
  children,
  position,
}: {
  children: ReactNode;
  position?: "left" | "right" | "bottom" | "top";
}) {
  const POSITION = {
    top: "left-1/2 -top-3 -translate-x-1/2 -translate-y-full  bg-blue-700 rounded-lg text-center text-white text-sm",
    right:
      "top-1/2 -right-3 -translate-y-1/2 translate-x-full bg-blue-700 rounded-lg text-center text-white text-sm",
    bottom:
      "left-1/2 -bottom-3 -translate-x-1/2 translate-y-full  bg-blue-700 rounded-lg text-center text-white text-sm",
    left: "top-1/2 -left-3 -translate-y-1/2 -translate-x-full bg-blue-700 rounded-lg text-center text-white text-sm",
  };
  const ARROW = {
    top: "after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-blue-700",
    right:
      "before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-blue-700",
    bottom:
      "after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-blue-700",
    left: "before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-blue-700",
  };
  return (
    <div
      className={`absolute hidden min-w-[8rem] px-2 py-1 group-hover:flex ${
        POSITION[position || "top"]
      } ${ARROW[position || "top"]}`}
    >
      {children}
    </div>
  );
}
