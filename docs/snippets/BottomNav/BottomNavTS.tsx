import React, { ReactNode } from "react";

/**
 * Example:
 * <BottomNav
    data={[
      {
        title: "Home",
        active: true,
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Favourites",
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
          </svg>
        ),
      },
      {
        title: "Settings",
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        ),
      },
    ]}
  />
 */

export type BottomNavType = {
  title: string;
  icon: ReactNode;
  link?: string;
  action?: any;
  active?: boolean;
};

function BottomNav({
  data,
  absolute,
}: {
  data: BottomNavType[];
  absolute: boolean;
}) {
  return (
    <div
      className={`${
        absolute ? "absolute" : "fixed"
      } bottom-0 left-0 right-0 flex flex-row justify-around items-center h-16 w-full bg-white dark:bg-slate-800 text-black dark:text-slate-300`}
    >
      {data.map((item) => {
        if (item.action)
          return (
            <div
              key={item.title}
              title={item.title}
              className="w-full flex justify-center border-2 border-transparent hover:border-t-orange-300 py-2 hover:text-orange-300 transition-all active:scale-90"
            >
              <button
                className="w-full flex justify-center"
                onClick={item.action}
              >
                {item.icon}
              </button>
            </div>
          );
        return (
          <div
            key={item.title}
            title={item.title}
            className={`w-full cursor-pointer border-2 border-transparent hover:border-t-orange-300 py-2 hover:text-orange-300 transition-all active:scale-90 ${
              item.active ? "border-t-orange-300 text-orange-300" : ""
            }`}
          >
            <a href={item.link} className="w-full flex justify-center">
              <button>{item.icon}</button>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default BottomNav;
