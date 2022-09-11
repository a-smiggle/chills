import SpinnerTS from "@snippets/Spinner/SpinnerTS";
import React from "react";

import Layout from "../../components/Layout";

export default function spinner() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Spinner</h1>
        <p className="pb-4">Creates an easy to use Spinner component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-spinner</li>
          <li>ch-spinnerTS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Progress takes the following props:</p>
        <ul>
          <li>closed?: boolean</li>
          <li>dashed?: boolean</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="flex gap-4">
          <div
            title="Base"
            className="w-fit rounded border-2 bg-sky-300 p-2 dark:bg-sky-800"
          >
            <SpinnerTS />
          </div>
          <div
            title="Dashed"
            className="w-fit rounded border-2 bg-sky-300 p-2 dark:bg-sky-800"
          >
            <SpinnerTS dashed />
          </div>
          <div
            title="Closed"
            className="w-fit rounded border-2 bg-sky-300 p-2 dark:bg-sky-800"
          >
            <SpinnerTS closed />
          </div>
          <div
            title="Dashed and Closed"
            className="w-fit rounded border-2 bg-sky-300 p-2 dark:bg-sky-800"
          >
            <SpinnerTS closed dashed />
          </div>
        </div>
      </div>
    </Layout>
  );
}
