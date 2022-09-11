import ProgressTS from "@snippets/Progress/ProgressTS";
import React from "react";

import Layout from "../../components/Layout";

export default function progress() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Progress</h1>
        <p className="pb-4">Creates an easy to use progress bar component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-progress</li>
          <li>ch-progressTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Progress takes the following props:</p>
        <ul>
          <li>progress: number</li>
          <li>showPercent?: boolean</li>
          <li>title?: string</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Previews</h2>
        <div className="flex flex-col gap-8">
          <ProgressTS progress={10} />
          <div title="With Percent">
            <ProgressTS progress={10} showPercent />
          </div>
          <div title="With Title and Percent">
            <ProgressTS progress={10} showPercent title="Loading" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
