import React from "react";

/**
 * Example:
 * <Alert
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

export default function Alert({ title, details, timestamp, actions }) {
  const STYLES = {
    main: {
      maxWidth: "max-w-sm",
      maxHeight: "max-h-32",
      height: "h-16",
      color:
        "bg-white-300/25 border-gray-700 dark:border-gray-300 dark:bg-gray-700/25",
      text: "text-gray-700 dark:text-gray-300",
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
          <div>
            <div className="font-bold capitalize text-lg">{title}</div>
            <div>{details}</div>
          </div>
        </div>
        <div className="flex-col justify-between">
          <div className="pt-1 text-xs">{timestamp}</div>
          <div className="flex flex-row justify-end my-auto">{actions}</div>
        </div>
      </div>
    </div>
  );
}
