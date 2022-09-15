import Countdown from "@snippets/Countdown/v1";
import React from "react";

import Layout from "../../components/Layout";

export default function v1() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Countdown V1</h1>
        <p className="pb-4">Creates an easy to use countdown component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-countdownV1</li>
          <li>ch-countdownV1TS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Countdown mockup takes the following props:</p>
        <ul>
          <li>date: number</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="w-1/2">
          <Countdown date={new Date().setDate(new Date().getDate() + 10)} />
        </div>
      </div>
    </Layout>
  );
}
