import React from "react";

export default function AlertTS({
  title,
  details,
  timestamp,
  actions,
}: {
  title: string;
  details?: string;
  timestamp?: string;
  actions?: JSX.Element;
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
        <div className="flex-col justify-between">
          <div className="pt-1 text-xs">{timestamp}</div>
          <div className="float-right flex-row justify-between">{actions}</div>
        </div>
      </div>
    </div>
  );
}
