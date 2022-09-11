import React, { Fragment } from "react";

/**
 * Example:
 * <Spinner dashed />
 */

export default function Spinner({ closed, dashed }) {
  return (
    <div className="flex">
      <div
        className={`relative z-20 animate-spin  rounded-full h-32 w-32 border-t-2 border-l-2 border-green-500 ${
          dashed ? "border-dashed" : ""
        }`}
      />
      {closed ? (
        <div className="absolute rounded-full h-32 w-32 border-2 border-gray-300 z-10" />
      ) : null}
    </div>
  );
}
