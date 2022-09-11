import DropdownWithIconTS from "@snippets/Dropdown/DropdownWithIconTS";
import React from "react";

import Layout from "../../components/Layout";

export default function dropdownIcons() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Dropdown</h1>
        <p className="pb-4">Creates an easy to use dropdown component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-dropdownIcon</li>
          <li>ch-dropdownIconTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Dropdown takes the following props:</p>
        <ul>
          <li>title: string - This is the button text</li>
          <li>data: DropdownData[]</li>
        </ul>
        <br />
        <p>Dropdown Data consists of:</p>
        <ul>
          <li>title: string</li>
          <li>link: string</li>
          <li>icon: ReactNode</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <DropdownWithIconTS
          title="With Icons"
          data={[
            {
              title: "Item 1",
              link: "/",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              ),
            },
            {
              title: "Item 2",
              link: "/",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
          ]}
        />
      </div>
    </Layout>
  );
}
