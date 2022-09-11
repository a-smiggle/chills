import ButtonTS from "@snippets/Button/ButtonTS";
import React from "react";

import Layout from "../../components/Layout";

export default function button() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Button</h1>
        <p className="pb-4">Creates an easy to use button component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-button</li>
          <li>ch-buttonTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Button takes the following props:</p>
        <ul>
          <li>
            type?: &qout;submit&qout; | &qout;reset&qout; | &qout;button&qout;
          </li>
          <li>onClick?: React.MouseEventHandler</li>
          <li>disabled?: boolean</li>
          <li>children: ReactNode</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <ButtonTS>Button</ButtonTS>
      </div>
    </Layout>
  );
}
