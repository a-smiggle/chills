import React from "react";

export default function InfoAlertTS({
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
      color: "bg-sky-300/25 border-sky-700",
      text: "text-sky-700",
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
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
