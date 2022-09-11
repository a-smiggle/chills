import React from "react";

/**
 * Example:
 * <WindowMac>
    <div className="flex flex-col justify-center items-center w-full h-full">
      Hello
    </div>
  </WindowMac>
 */

export default function WindowMac({ children }) {
  return (
    <div className="relative rounded-lg border-2 border-black h-full bg-white dark:bg-slate-800">
      <div className="pl-4 pt-2 border-b-2 border-black rounded-t-lg bg-gray-300 dark:bg-gray-800">
        <div className="flex justify-start pb-2 gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500 border-2 border-red-600" />
          <div className="h-4 w-4 rounded-full bg-yellow-500 border-2 border-yellow-600" />
          <div className="h-4 w-4 rounded-full bg-green-500 border-2 border-green-600" />
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
