import React from "react";

export default function ProgressTS({
  progress,
  showPercent,
  title,
}: {
  progress: number;
  showPercent?: boolean;
  title?: string;
}) {
  return (
    <div className="w-72">
      {title || showPercent ? (
        <div className="pb-4">
          {title ? (
            <span className="rounded bg-green-500 p-2 font-medium text-white">
              {title}
            </span>
          ) : null}
          {showPercent ? (
            <span className="float-right rounded bg-green-500 px-2 py-1 font-medium text-white">
              {progress} %
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="h-2 w-full rounded-full bg-gray-400">
        <div
          style={{ width: `${progress || 0}%` }}
          className="h-full rounded-full bg-green-500"
        />
      </div>
    </div>
  );
}
