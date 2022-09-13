// Design from https://www.tailwind-kit.com/components/header

import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import { MOBILE_MENU } from "./Menu";

export default function Navbar() {
  // Get current location
  const [pathname, setPathname] = useState("/");
  const router = useRouter();
  useEffect(() => {
    setPathname(router.pathname);
  }, []);

  // Navbar Styles
  const STYLES = {
    navbarColor: "bg-white dark:bg-sky-800",
    navbarHeight: " h-16",
    brand: "text-sky-500 dark:text-white text-2xl font-bold",
    link: "text-sky-300 hover:text-sky-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    linkActive:
      "text-sky-500 font-bold dark:text-white  hover:text-sky-800 dark:hover:text-white px-3 py-2 rounded-md text-sm",
    mobileLink:
      "text-sky-300 hover:text-sky-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    mobileLinkActive:
      "text-sky-500 font-bold dark:text-white block px-3 py-2 rounded-md text-base",
    toggle:
      "text-sky-800 dark:text-white hover:text-sky-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
  };

  // Navbar Variables
  const BRAND = "Chills";
  const MENU = [
    { title: "Home", link: "/", subMenu: [] },
    {
      title: "Install",
      link: "/install",
    },
    {
      title: "Snippets",
      link: "/snippets/accordion",
    },
  ];

  // Navbar State
  const [open, setOpen] = useState(false);

  // Dropdown
  function dropdown(menuItem: {
    title: string;
    link: string;
    subMenu?: { title: string; link: string }[];
  }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openD, setOpenD] = useState(false);

    const DROPDOWN_STYLES = {
      button: {
        shape: "rounded-md",
        shadow: "shadow-sm",
        color:
          "bg-white dark:bg-sky-800 focus:ring-offset-sky-100 focus:ring-sky-500",
        base: "flex gap-4 items-center justify-center w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
        text: "text-sm font-medium",
        textColor: "text-sky-300 hover:text-sky-800 dark:hover:text-white",
        textColorActive:
          "text-sky-800 dark:text-white hover:text-sky-800 dark:hover:text-white",
      },
      menu: {
        shape: "rounded-md",
        shadow: "shadow-lg",
        color: "bg-white dark:bg-sky-800 ring-black",
        text: "",
        base: "origin-top-right absolute right-0 mt-2 w-fit ring-1 ring-opacity-5 transition-all duration-300",
      },
      menuItem: {
        shape: "rounded-md",
        shadow: "",
        color: "hover:bg-sky-100  dark:hover:bg-sky-600",
        textColor: "text-sky-300 hover:text-sky-800 dark:hover:text-white",
        textColorActive:
          "text-sky-800 dark:text-white hover:text-sky-800 dark:hover:text-white",
        base: "block items-center px-4 py-2",
      },
    };
    return (
      <div key={menuItem.title} className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setOpenD(!openD)}
            onMouseOver={() => setOpenD(true)}
            onMouseLeave={() => setOpenD(false)}
            onBlur={() => setOpenD(false)}
            type="button"
            className={`${DROPDOWN_STYLES.button.shadow} ${DROPDOWN_STYLES.button.shape} ${DROPDOWN_STYLES.button.color} ${DROPDOWN_STYLES.button.text} ${DROPDOWN_STYLES.button.textColor} ${DROPDOWN_STYLES.button.base}`}
            id="options-menu"
          >
            {menuItem.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-all duration-300 ${
                openD ? "rotate-180" : ""
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
          onMouseOver={() => setOpenD(true)}
          onMouseLeave={() => setOpenD(false)}
          className={`${
            openD ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } ${DROPDOWN_STYLES.menu.shape} ${DROPDOWN_STYLES.menu.shadow} ${
            DROPDOWN_STYLES.menu.color
          } ${DROPDOWN_STYLES.menu.base}`}
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItem.subMenu?.map((item) => (
              <a
                key={`MenuItem:${item.title}`}
                href={item.link}
                className={`${DROPDOWN_STYLES.menuItem.color} ${
                  DROPDOWN_STYLES.menuItem.shape
                } ${DROPDOWN_STYLES.menuItem.base} ${
                  pathname === item.link
                    ? DROPDOWN_STYLES.menuItem.textColorActive
                    : DROPDOWN_STYLES.menuItem.textColor
                }`}
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

  // Accordion for mobile menu
  function accordion(menuItem: {
    title: string;
    link: string;
    subMenu?: { title: string; link: string }[];
  }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openA, setOpenA] = useState(false);

    return (
      <Fragment key={`mobileMenu: ${menuItem.title}`}>
        <a
          onClick={() => setOpenA(!openA)}
          className={`flex items-center gap-2 ${STYLES.mobileLink}`}
        >
          {menuItem.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-all duration-300 ${
              openA ? "rotate-180" : ""
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
        </a>
        <div
          className={`${
            openA ? " h-fit" : "h-0 -translate-y-2 scale-y-0 opacity-0"
          } origin-top px-4 transition duration-300 ease-out`}
        >
          {menuItem.subMenu?.map((item) => (
            <Link href={item.link} key={`mobileMenu: ${item.title}`}>
              <a
                className={
                  pathname === item.link
                    ? STYLES.mobileLinkActive
                    : STYLES.mobileLink
                }
              >
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }

  return (
    <nav className={`${STYLES.navbarColor} sticky top-0 z-10 shadow`}>
      <div className="mx-auto max-w-7xl px-8">
        <div
          className={`flex items-center justify-between ${STYLES.navbarHeight}`}
        >
          <div className="flex items-center">
            <Link className="shrink-0 cursor-pointer" href="/">
              <h1 className={STYLES.brand}>{BRAND}</h1>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {MENU.map((item) => {
                  if (item.subMenu && item.subMenu.length > 0) {
                    return dropdown(item);
                  }
                  return (
                    <Link key={`menu: ${item.title}`} href={item.link}>
                      <a
                        className={
                          pathname === item.link
                            ? STYLES.linkActive
                            : STYLES.link
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6"></div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setOpen(!open)} className={STYLES.toggle}>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${open ? "" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {MOBILE_MENU.map((item) => {
            if (item.subMenu && item.subMenu.length > 0) {
              return accordion(item);
            }
            return (
              <Link href={item.link} key={`mobileMenu: ${item.title}`}>
                <a
                  className={
                    pathname === item.link
                      ? STYLES.mobileLinkActive
                      : STYLES.mobileLink
                  }
                >
                  {item.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
