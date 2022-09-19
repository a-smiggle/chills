import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useEffect, useState } from "react";

import { MENU } from "./Menu";

export default function Sidenav() {
  // Get current location
  const [pathname, setPathname] = useState("/");
  const router = useRouter();
  useEffect(() => {
    setPathname(router.pathname);
  }, []);

  // Navbar Variables
  const BRAND = "";

  const STYLES = {
    brand:
      "text-gray-800 dark:text-white text-4xl font-bold flex justify-center py-4",
    background: "bg-white dark:bg-gray-800",
    width: "w-72",
    height: "h-fit",
    item: "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg",
    itemActive:
      "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600",
  };

  function accordion(menuItem: {
    title: string;
    link: string;
    icon?: ReactNode;
    subMenu?: { title: string; link: string; icon?: ReactNode }[];
  }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <Fragment key={`Sidebar: ${menuItem.title}`}>
        <a onClick={() => setOpen(!open)} className={STYLES.item}>
          <div className="flex w-full items-center justify-between">
            <span className="mx-4 flex items-center gap-2 text-lg font-normal">
              {menuItem.icon ?? null}
              {menuItem.title}
            </span>
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
          </div>
        </a>
        <div
          className={`${
            open ? " h-fit" : "h-0 -translate-y-2 scale-y-0 opacity-0"
          } origin-top px-4 transition duration-300 ease-out`}
        >
          {menuItem.subMenu?.map((item) => (
            <Link key={`Sidebar: ${item.title}`} href={item.link}>
              <a
                className={
                  pathname === item.link ? STYLES.itemActive : STYLES.item
                }
              >
                <span className="mx-4 flex items-center gap-2 text-lg font-normal">
                  {item.icon ?? null}
                  {item.title}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }

  return (
    <div
      className={`relative hidden flex-col overflow-auto sm:flex-row sm:justify-around md:flex ${STYLES.background} ${STYLES.width} ${STYLES.height}`}
    >
      <nav className="w-full px-2">
        {BRAND !== "" ? <h1 className={STYLES.brand}>{BRAND}</h1> : <br />}
        {MENU.map((item) => {
          if (item.subMenu && item.subMenu.length > 0) {
            return accordion(item);
          }
          return (
            <Link key={`Sidebar: ${item.title}`} href={item.link}>
              <a
                className={
                  pathname === item.link ? STYLES.itemActive : STYLES.item
                }
              >
                <span className="mx-4 flex items-center gap-2 text-lg font-normal">
                  {item.icon ?? null}
                  {item.title}
                </span>
              </a>
            </Link>
          );
        })}
      </nav>
      <div className="absolute inset-x-0 bottom-4">{/* Footer Items */}</div>
    </div>
  );
}
