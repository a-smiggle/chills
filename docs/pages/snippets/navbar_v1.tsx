import Navbar from "@snippets/Navbar/v1_next";
import React from "react";

import Layout from "../../components/Layout";

export default function v1() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Navbar V1</h1>
        <p className="pb-4">Creates an easy to use navbar component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <p className="pb-4">
          There are two versions, one for React and the other for Next.JS.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-navbarV1React</li>
          <li>ch-navbarV1Next</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="rounded border-2 bg-sky-300 p-2 dark:bg-sky-800">
          <Navbar />
        </div>
      </div>
    </Layout>
  );
}
