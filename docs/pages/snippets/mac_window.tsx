import WindowMac from "@snippets/Mockup/WindowMac";
import React from "react";

import Layout from "../../components/Layout";

export default function windowMac() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Window Mockup</h1>
        <p className="pb-4">Creates an easy to use window mockup component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-window</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Phone mockup takes the following props:</p>
        <ul>
          <li>children</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <WindowMac>
          <div className="flex h-full w-full flex-col items-center justify-center">
            Hello
          </div>
        </WindowMac>
      </div>
    </Layout>
  );
}
