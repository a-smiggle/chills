import Footer from "@snippets/Footer/v5";
import React from "react";

import Layout from "../../components/Layout";

export default function v5() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Footer V5</h1>
        <p className="pb-4">Creates an easy to use footer component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-footerV5</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="rounded border-2 bg-sky-300 p-2 dark:bg-sky-800">
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
