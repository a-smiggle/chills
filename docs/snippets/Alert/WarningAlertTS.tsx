import React from "react";

export default function WarningAlertTS({
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
      color: "bg-yellow-300/25 border-yellow-700",
      text: "text-yellow-700",
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
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
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
