import React, { Fragment } from "react";

/**
 * Example Data:
 * [
    { title: "Home", link: "/" },
    {
      title: "Gallery",
      link: "/gallery",
    },
    { title: "Top Picks", link: "/gallery/top_picks" },
  ];
 */

/**
 * Example:
 * <BreadcrumbTS
        data={[
          { title: "Home", link: "/" },
          { title: "Snippets", link: "/snippets/accordion" },
          { title: "Breadcrumbs", link: "/snippets/breadcrumb" },
        ]}
      />
  */

export type BreadcrumbData = {
  title: string;
  link: string;
};

export default function BreadcrumbTS({ data }: { data: BreadcrumbData[] }) {
  return (
    <ul className="flex flex-row gap-2">
      {data.map((item, index) => (
        <li
          key={`Breadcrumb: ${item.title}`}
          className="flex flex-row items-center gap-2"
        >
          {data.length - 1 === index ? (
            <a>{item.title}</a>
          ) : (
            <Fragment>
              <a href={item.link} className="hover:underline">
                {item.title}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Fragment>
          )}
        </li>
      ))}
    </ul>
  );
}
