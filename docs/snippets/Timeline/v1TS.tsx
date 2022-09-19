// Design from https://tailwind-elements.com/docs/standard/components/timeline

import React, { ReactNode } from "react";

/**
 * Example:
 * <Timeline
        data={[
            {
            date: "19.09.2022",
            title: "One",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
            },
            {
            date: "20.09.2022",
            title: "Two",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
            },
            {
            date: "21.09.2022",
            title: "Three",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
            action: (
                <button className="w-fit justify-center border cursor-pointer disabled:cursor-not-allowed border-emerald-500 rounded px-4 py-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-90 disabled:scale-100">
                Read More
                </button>
            ),
            },
        ]}
        />
 */

export type TimelineData = {
  date: string;
  title: string;
  body: string;
  action?: ReactNode;
};

export default function Timeline({ data }: { data: TimelineData[] }) {
  return (
    <ol className="border-l-2 border-black dark:border-slate-300">
      {data.map((item, index) => (
        <li key={`${index}: ${item}`}>
          <div className="flex items-center justify-start pt-3">
            <div className="-ml-1 mr-4 h-2 w-2 rounded-full bg-black dark:bg-slate-300"></div>
            <p className="text-sm text-gray-500 dark:text-slate-300">
              {item.date}
            </p>
          </div>
          <div className="mt-0.5 ml-4 mb-6">
            <h4 className="mb-1.5 text-xl font-semibold text-black dark:text-white">
              {item.title}
            </h4>
            <p className="mb-3 text-gray-500 dark:text-slate-300">
              {item.body}
            </p>
            <div className="flex justify-start gap-2">{item.action}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
