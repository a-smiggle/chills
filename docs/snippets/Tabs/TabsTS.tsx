import React, { ReactNode, useState } from "react";

/**
 * Example:
 *  <TabsTS
      stretched
      data={[
        { title: "Tab1", content: "Tab1 content" },
        { title: "Tab2", content: "Tab2 content" },
      ]}
    />
 */

export type TabData = {
  title: string;
  content: ReactNode;
};

export default function TabsTS({
  data,
  stretched,
}: {
  data: TabData[];
  stretched?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row justify-start">
        {data.map((item, index) => {
          if (index === selected) {
            return (
              <button
                key={`Tab Button: ${index}`}
                onClick={() => setSelected(index)}
                className={`border-b-2 border-black text-black ${
                  stretched ? "w-full" : "px-2"
                }`}
              >
                {item.title}
              </button>
            );
          }
          return (
            <button
              key={`Tab Button: ${index}`}
              onClick={() => setSelected(index)}
              className={`border-b-2 border-gray-300 text-gray-300 hover:text-black active:scale-90  ${
                stretched ? "w-full" : "px-2"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {data.map((item, index) => {
        if (index === selected) {
          return item.content;
        }
        return null;
      })}
    </div>
  );
}
