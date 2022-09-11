import React, { ReactNode } from "react";

/**
 * Example:
 * <AlertTS
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

export default function AlertTS({
  title,
  details,
  timestamp,
  actions,
}: {
  title: string;
  details?: string;
  timestamp?: string;
  actions?: ReactNode;
}) {
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
      className={`w-fit overflow-auto border-l-4 ${STYLES.main.maxHeight} ${STYLES.main.maxWidth} ${STYLES.main.height} ${STYLES.main.color} ${STYLES.main.text} ${STYLES.main.shape} ${STYLES.main.shadow}`}
    >
      <div className="mx-2 flex h-full justify-between gap-4 text-sm">
        <div className="flex h-full items-center gap-2">
          <div>
            <div className="text-lg font-bold capitalize">{title}</div>
            <div>{details}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="pt-1 text-xs">{timestamp}</div>
          <div className="my-auto flex flex-row justify-end">{actions}</div>
        </div>
      </div>
    </div>
  );
}
