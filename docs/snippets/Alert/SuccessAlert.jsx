import React from "react";

/**
 * Example:
 * <SuccessAlert
    title="Alert"
    details="I am an Alert."
    timestamp="Tue, 06 Sep 2022 22:57:04 GMT"
    actions={
      <div className="w-fit">
        <button className="bg-red-500 text-white rounded hover:bg-red-400 active:scale-90 transition-all p-1">
          Close
        </button>
      </div>
    }
  />
 */

export default function SuccessAlert({ title, details, timestamp, actions }) {
  const STYLES = {
    main: {
      maxWidth: "max-w-sm",
      maxHeight: "max-h-32",
      height: "h-16",
      color:
        "bg-green-300/25 border-green-700 dark:bg-green-700/25 dark:border-green-300",
      text: "text-green-700 dark:text-green-300",
      shadow: "shadow-lg",
      shape: "rounded-md",
    },
  };
  return (
    <div
      className={`overflow-auto w-fit border-l-4 ${STYLES.main.maxHeight} ${STYLES.main.maxWidth} ${STYLES.main.height} ${STYLES.main.color} ${STYLES.main.text} ${STYLES.main.shape} ${STYLES.main.shadow}`}
    >
      <div className="mx-2 flex h-full justify-between gap-4 text-sm">
        <div className="flex h-full items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
          <div>
            <div className="font-bold capitalize text-lg">{title}</div>
            <div>{details}</div>
          </div>
        </div>
        <div className="flex-col justify-between">
          <div className="pt-1 text-xs">{timestamp}</div>
          <div className="float-right flex-row justify-between">{actions}</div>
        </div>
      </div>
    </div>
  );
}
