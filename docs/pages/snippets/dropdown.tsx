import DropdownTS from "@snippets/Dropdown/DropdownTS";
import React from "react";

import Layout from "../../components/Layout";

export default function dropdown() {
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
          <li>ch-dropdown</li>
          <li>ch-dropdownTS</li>
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
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <DropdownTS
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
      </div>
    </Layout>
  );
}
