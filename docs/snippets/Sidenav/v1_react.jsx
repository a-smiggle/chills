import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Sidenav() {
  // Get current location
  const [pathname, setPathname] = useState("/");
  const router = useLocation();
  useEffect(() => {
    setPathname(router.pathname);
  }, []);

  // Navbar Variables
  const BRAND = "BRAND";
  const MENU = [
    {
      title: "Home",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      subMenu: [],
    },
    {
      title: "Gallery",
      link: "",
      subMenu: [
        { title: "Overview", link: "/gallery" },
        { title: "Top Picks", link: "/gallery/top_picks" },
      ],
    },
    { title: "Project", link: "/project", subMenu: [] },
    { title: "Contact", link: "/contact", subMenu: [] },
  ];

  const STYLES = {
    brand:
      "text-gray-800 dark:text-white text-4xl font-bold flex justify-center py-4",
    background: "bg-white dark:bg-gray-800",
    width: "w-72",
    height: "h-screen",
    item: "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg",
    itemActive:
      "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600",
  };

  function accordion(menuItem) {
    const [open, setOpen] = useState(false);

    return (
      <Fragment key={`Sidebar: ${menuItem.title}`}>
        <a onClick={() => setOpen(!open)} className={STYLES.item}>
          <span className="mx-4 flex items-center gap-2 text-lg font-normal">
            {menuItem.icon ?? null}
            {menuItem.title}
          </span>
        </a>
        <div
          className={`${
            open ? " h-fit" : "h-0 -translate-y-2 scale-y-0 opacity-0"
          } origin-top px-4 transition duration-300 ease-out`}
        >
          {menuItem.subMenu.map((item) => (
            <a
              key={`Sidebar: ${item.title}`}
              href={item.link}
              className={
                pathname.includes(item.link) ? STYLES.itemActive : STYLES.item
              }
            >
              <span className="mx-4 flex items-center gap-2 text-lg font-normal">
                {item.icon ?? null}
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </Fragment>
    );
  }

  return (
    <div
      className={`relative flex flex-col sm:flex-row sm:justify-around ${STYLES.background} ${STYLES.width} ${STYLES.height}`}
    >
      <nav className="w-full px-2">
        {BRAND !== "" ? <h1 className={STYLES.brand}>{BRAND}</h1> : null}
        {MENU.map((item) => {
          if (item.subMenu && item.subMenu.length > 0) {
            return accordion(item);
          }
          return (
            <a
              key={`Sidebar: ${item.title}`}
              href={item.link}
              className={
                pathname.includes(item.link) ? STYLES.itemActive : STYLES.item
              }
            >
              <span className="mx-4 flex items-center gap-2 text-lg font-normal">
                {item.icon ?? null}
                {item.title}
              </span>
            </a>
          );
        })}
      </nav>
      <div className="absolute inset-x-0 bottom-4">{/* Footer Items */}</div>
    </div>
  );
}
