import React from "react";

export default function Progress({ progress, showPercent, title }) {
  return (
    <div className="w-72">
      {title || showPercent ? (
        <div className="pb-4">
          {title ? (
            <span className="bg-green-500 text-white rounded px-2 py-2 font-medium">
              {title}
            </span>
          ) : null}
          {showPercent ? (
            <span className="float-right bg-green-500 text-white rounded px-2 py-1 font-medium">
              {progress} %
            </span>
          ) : null}{" "}
        </div>
      ) : null}

      <div className="w-full h-2 bg-gray-400 rounded-full">
        <div
          style={{ width: `${progress ? progress : 0}%` }}
          className="h-full bg-green-500 rounded-full"
        />
      </div>
    </div>
  );
}
