import React, { Fragment, useState } from "react";

/**
 * Example:
 * <SpeedDial
    focus
    position="bottomLeft"
    layout="vertical"
    data={[
      {
        title: "Copy",
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
            <path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
            <path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
          </svg>
        ),
      },
      {
        title: "Copy",
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
            <path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
            <path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
          </svg>
        ),
      },
      {
        title: "Copy",
        link: "#",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
            <path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
            <path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
          </svg>
        ),
      },
    ]}
  />
 */

export default function SpeedDial({ focus, absolute, position, layout, data }) {
  const POSITION = {
    topLeft: "top-4 left-4",
    topRight: "top-4 right-4",
    bottomLeft: "bottom-4 left-4",
    bottomRight: "bottom-4 right-4",
  };

  const LAYOUT = {
    vertical: "flex flex-col",
    horizontal: "flex flex-row",
  };

  const POS = position || "bottomRight";
  const LAY = layout || "vertical";

  let SPECIFIC = "";
  if (POS === "topLeft" && LAY === "vertical") {
    SPECIFIC = `${LAYOUT.vertical} left-1/2 -translate-x-1/2 origin-top`;
  }
  if (POS === "topLeft" && LAY === "horizontal") {
    SPECIFIC = `${LAYOUT.horizontal} top-1/2 -translate-y-1/2 left-[110%] origin-left`;
  }
  if (POS === "topRight" && LAY === "vertical") {
    SPECIFIC = `${LAYOUT.vertical} left-1/2 -translate-x-1/2 origin-top`;
  }
  if (POS === "topRight" && LAY === "horizontal") {
    SPECIFIC = `${LAYOUT.horizontal} top-1/2 -translate-y-1/2 right-[110%] origin-right`;
  }
  if (POS === "bottomLeft" && LAY === "vertical") {
    SPECIFIC = `${LAYOUT.vertical} left-1/2 -translate-x-1/2 bottom-[110%] origin-bottom`;
  }
  if (POS === "bottomLeft" && LAY === "horizontal") {
    SPECIFIC = `${LAYOUT.horizontal} top-1/2 -translate-y-1/2 left-[110%] origin-left`;
  }
  if (POS === "bottomRight" && LAY === "vertical") {
    SPECIFIC = `${LAYOUT.vertical} left-1/2 -translate-x-1/2 bottom-[110%] origin-bottom`;
  }
  if (POS === "bottomRight" && LAY === "horizontal") {
    SPECIFIC = `${LAYOUT.horizontal} top-1/2 -translate-y-1/2 right-[110%] origin-right`;
  }

  const [open, setOpen] = useState(false);
  if (!data) return null;
  return (
    <Fragment>
      {focus && open ? (
        <div className="fixed w-screen h-screen top-0 left-0 z-[60] bg-slate-800/75"></div>
      ) : null}
      <div
        className={`${absolute ? "absolute" : "fixed"} ${
          position ? POSITION[position] : POSITION.bottomRight
        } z-[70]`}
      >
        <div className="relative">
          <button
            className="rounded-full bg-blue-500 p-4"
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              version="1.1"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
              className={`${open ? "rotate-45" : ""} transition-all`}
            >
              <defs></defs>
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
              <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            </svg>
          </button>
          <div
            className={`absolute ${
              open ? "" : "scale-0 opacity-0"
            } ${SPECIFIC} gap-2 pt-2 transition-all `}
          >
            {data.map((item, index) => {
              if (item.link)
                return (
                  <a href={item.link}>
                    <button
                      key={`${index}:${item.title}`}
                      title={item.title}
                      className="rounded-full bg-blue-500 p-4"
                    >
                      {item.icon}
                    </button>
                  </a>
                );
              return (
                <button
                  key={`${index}:${item.title}`}
                  title={item.title}
                  className="rounded-full bg-blue-500 p-4"
                  onClick={item.action}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
