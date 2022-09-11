import StepsYTS from "@snippets/Steps/StepsYTS";
import React from "react";

import Layout from "../../components/Layout";

export default function stepsY() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Steps Y (Vertical)</h1>
        <p className="pb-4">
          Creates an easy to use Steps component that spans vertically.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-stepsY</li>
          <li>ch-stepsYTS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>
          Steps takes an array of objects, those containing the following props:
        </p>
        <ul>
          <li>title: string</li>
          <li>completed: boolean</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <StepsYTS
          steps={[
            { title: "Start", completed: true },
            { title: "Middle", completed: false },
            { title: "End", completed: false },
          ]}
        />
      </div>
    </Layout>
  );
}
