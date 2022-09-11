import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useEffect, useState } from "react";

export default function Sidenav() {
  // Get current location
  const [pathname, setPathname] = useState("/");
  const router = useRouter();
  useEffect(() => {
    setPathname(router.pathname);
  }, []);

  // Navbar Variables
  const BRAND = "";
  const MENU = [
    {
      title: "Accordion",
      link: "/snippets/accordion",
      icon: undefined,
      subMenu: [],
    },
    {
      title: "Alerts",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Alert", link: "/snippets/alert", icon: undefined },
        {
          title: "Error Alert",
          link: "/snippets/error_alert",
          icon: undefined,
        },
        { title: "Info Alert", link: "/snippets/info_alert", icon: undefined },
        {
          title: "Success Alert",
          link: "/snippets/success_alert",
          icon: undefined,
        },
        {
          title: "Warning Alert",
          link: "/snippets/warning_alert",
          icon: undefined,
        },
      ],
    },
    {
      title: "Avatars",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Avatar", link: "/snippets/avatar", icon: undefined },
        {
          title: "Avatar Clip",
          link: "/snippets/avatar_clip",
          icon: undefined,
        },
        {
          title: "Avatar Placeholder",
          link: "/snippets/avatar_placeholder",
          icon: undefined,
        },
      ],
    },
    {
      title: "Breadcrumbs",
      link: "/snippets/breadcrumb",
      icon: undefined,
      subMenu: [],
    },
    {
      title: "Buttons",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Button", link: "/snippets/button", icon: undefined },
        {
          title: "Icon Button",
          link: "/snippets/icon_button",
          icon: undefined,
        },
        {
          title: "Button With Icon",
          link: "/snippets/button_icon",
          icon: undefined,
        },
      ],
    },
    {
      title: "Dropdowns",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Dropdown", link: "/snippets/dropdown", icon: undefined },
        {
          title: "Dropdown With Icon",
          link: "/snippets/dropdown_icon",
          icon: undefined,
        },
      ],
    },
    {
      title: "Mockups",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Code", link: "/snippets/code", icon: undefined },
        { title: "Phone", link: "/snippets/phone", icon: undefined },
        { title: "Window", link: "/snippets/window", icon: undefined },
        { title: "Mac Window", link: "/snippets/mac_window", icon: undefined },
      ],
    },
    {
      title: "Modals",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Modal", link: "/snippets/modal", icon: undefined },
        {
          title: "Login Modal",
          link: "/snippets/login_modal",
          icon: undefined,
        },
      ],
    },
    {
      title: "Navbars",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "V1", link: "/snippets/navbar_v1", icon: undefined },
        {
          title: "V2",
          link: "/snippets/navbar_v2",
          icon: undefined,
        },
        {
          title: "V3",
          link: "/snippets/navbar_v3",
          icon: undefined,
        },
      ],
    },
    {
      title: "Progress",
      link: "/snippets/progress",
      icon: undefined,
      subMenu: [],
    },
    {
      title: "Sidenavs",
      link: "",
      icon: undefined,
      subMenu: [{ title: "V1", link: "/snippets/sidenav_v1", icon: undefined }],
    },
    {
      title: "Spinner",
      link: "/snippets/spinner",
      icon: undefined,
      subMenu: [],
    },
    {
      title: "Steps",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Steps X", link: "/snippets/steps_x", icon: undefined },
        { title: "Steps Y", link: "/snippets/steps_y", icon: undefined },
      ],
    },
    {
      title: "Tabs",
      link: "",
      icon: undefined,
      subMenu: [
        { title: "Tabs", link: "/snippets/tabs", icon: undefined },
        {
          title: "Tabs Vertical",
          link: "/snippets/tabs_vertical",
          icon: undefined,
        },
      ],
    },
    {
      title: "Tooltips",
      link: "/snippets/tooltip",
      icon: undefined,
      subMenu: [],
    },
  ];

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
                  pathname.includes(item.link) ? STYLES.itemActive : STYLES.item
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
      className={`relative flex flex-col overflow-auto sm:flex-row sm:justify-around ${STYLES.background} ${STYLES.width} ${STYLES.height}`}
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
                  pathname.includes(item.link) ? STYLES.itemActive : STYLES.item
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
