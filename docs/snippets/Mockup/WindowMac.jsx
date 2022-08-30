import React from "react";

export default function WindowMac({ children }) {
  return (
    <div className="relative rounded-lg border-2 border-black h-full">
      <div className="pl-4 pt-4 border-b-2 bg-gray-300 dark:bg-gray-800">
        <div className="flex justify-start pr-4 pb-4 gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500 border-2 border-red-600" />
          <div className="h-4 w-4 rounded-full bg-yellow-500 border-2 border-yellow-600" />
          <div className="h-4 w-4 rounded-full bg-green-500 border-2 border-green-600" />
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
