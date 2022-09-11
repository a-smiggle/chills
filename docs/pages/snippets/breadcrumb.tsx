import BreadcrumbTS from "@snippets/Breadcrumb/BreadcrumbTS";
import React from "react";

import Layout from "../../components/Layout";

export default function breadcrumb() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Breadcrumbs</h1>
        <p className="pb-4">
          Breadcrumbs allows an easy method to highlight previous pages and
          allows the user to navigate to a specific one.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-breadcrumb</li>
          <li>ch-breadcrumbTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>
          Breadcrumb takes a data array of objects with the following props per
          item:
        </p>
        <ul>
          <li>title?: string</li>
          <li>link?: string</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <BreadcrumbTS
          data={[
            { title: "Home", link: "/" },
            { title: "Snippets", link: "/snippets/accordion" },
            { title: "Breadcrumbs", link: "/snippets/breadcrumb" },
          ]}
        />
      </div>
    </Layout>
  );
}
