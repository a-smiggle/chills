// Design https://www.tailwind-kit.com/components/ddm
// Replace button with one required. Eg Profile Image

import React, { useState } from "react";

/** Example Data:
   const MENU = [
    { title: "Item 1", link: "/" },
    { title: "Item 2", link: "/" },
  ];
 */

/**
 * Example:
 *  <DropdownTS
      title="Dropdown"
      data={[
        {
          title: "Item 1",
          link: "#",
        },
        {
          title: "Item 2",
          link: "#",
        },
      ]}
    />
 */

export type DropdownData = {
  title: string;
  link: string;
};

export default function DropdownTS({
  data,
  title,
}: {
  data: DropdownData[];
  title: string;
}) {
  const [open, setOpen] = useState(false);

  const STYLES = {
    button: {
      shape: "rounded-md",
      shadow: "shadow-sm",
      color:
        "border-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-500 focus:ring-offset-gray-100 focus:ring-gray-500",
      base: "border flex gap-4 items-center justify-center w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
      text: "text-sm font-medium text-gray-700 dark:text-gray-50",
    },
    menu: {
      shape: "rounded-md",
      shadow: "shadow-lg",
      color: "bg-white dark:bg-gray-800 ring-black",
      text: "",
      base: "origin-top-right absolute right-0 mt-2 w-fit ring-1 ring-opacity-5 transition-all duration-300",
    },
    menuItem: {
      shape: "",
      shadow: "",
      color: "hover:bg-gray-100  dark:hover:bg-gray-600",
      text: "hover:text-gray-900 dark:text-gray-100 text-md text-gray-700 dark:hover:text-white",
      base: "block items-center px-4 py-2",
    },
  };
  return (
    <div className="relative inline-block w-fit text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          onBlur={() => setOpen(false)}
          type="button"
          className={`${STYLES.button.shadow} ${STYLES.button.shape} ${STYLES.button.color} ${STYLES.button.text} ${STYLES.button.base}`}
          id="options-menu"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-all duration-300 ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${open ? "scale-100 opacity-100" : "scale-0 opacity-0"} ${
          STYLES.menu.shape
        } ${STYLES.menu.shadow} ${STYLES.menu.color} ${STYLES.menu.base}`}
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {data.map((item) => (
            <a
              key={`MenuItem: ${item.title}`}
              href={item.link}
              className={`${STYLES.menuItem.color} ${STYLES.menuItem.text} ${STYLES.menuItem.base}`}
              role="menuitem"
            >
              <span className="flex flex-col">
                <span>{item.title}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
