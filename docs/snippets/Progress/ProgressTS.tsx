import React from "react";

/**
 * Example:
 * <ProgressTS progress={10} showPercent />
 */

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
    <div className="w-full">
      {title || showPercent ? (
        <div className="flex justify-between pb-4">
          {title ? (
            <span className="rounded bg-green-500 px-1 font-medium text-white">
              {title}
            </span>
          ) : (
            <div></div>
          )}
          {showPercent ? (
            <span className="float-right rounded bg-green-500 px-1 font-medium text-white">
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
