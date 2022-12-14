import React, { useState } from "react";

/**
 * Example Data:
 * const ITEMS = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
    },
    { title: "Title 2", content: <div>Title2 Content</div> },
    { title: "Title 3", content: <a>Title3 Content</a> },
  ];
 */

/**
 * Example usage:
 * <Accordion
        data={[
          {
            title: "Title 1",
            content:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
          },
          { title: "Title 2", content: <div>Title2 Content</div> },
          { title: "Title 3", content: <a>Title3 Content</a> },
        ]}
      />
  */

export default function Accordion({ data }) {
  const STYLES = {
    main: {
      maxWidth: "max-w-lg",
      shape: "rounded-xl",
      border: "",
      color: "", //Will affect content background
      text: "", //Will affect content text
    },
    title: {
      color: "bg-gray-100",
      text: "text-bold text-lg",
    },
  };

  return (
    <div
      className={`w-full ${STYLES.main.maxWidth} ${STYLES.main.shape} ${STYLES.main.border} ${STYLES.main.color} ${STYLES.main.text}`}
    >
      {data.map((item) => {
        const [open, setOpen] = useState(false);
        return (
          <React.Fragment key={item.title}>
            <a
              onClick={() => setOpen(!open)}
              className={`py-2 px-4 flex flex-row justify-between cursor-pointer ${STYLES.title.color} ${STYLES.title.text}`}
            >
              <span>{item.title}</span>
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
            </a>
            <div
              className={`${
                open ? "py-2 h-fit" : "scale-y-0 opacity-0 -translate-y-2 h-0"
              } px-4 origin-top transition duration-300 ease-out`}
            >
              {item.content}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
