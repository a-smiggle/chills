import Card from "@snippets/Card/v4TS";
import React from "react";

import Layout from "../../components/Layout";

export default function v4() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Card V4</h1>
        <p className="pb-4">Creates an easy to use card component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-cardV4</li>
          <li>ch-cardV4TS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Card takes the following props:</p>
        <ul>
          <li>loading?: boolean</li>
          <li>title?: string</li>
          <li>alt?: string</li>
          <li>body?: string</li>
          <li>action?: ReactNod;</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="w-1/2">
          <Card
            title="Hello"
            image="https://placeimg.com/200/280/arch"
            body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
            action={
              <button className="flex w-fit items-center justify-center gap-2 rounded bg-red-500 px-4 py-2 text-lg font-semibold transition-colors duration-300 hover:text-white active:scale-90 disabled:scale-100">
                More ..
              </button>
            }
          />
        </div>
      </div>
    </Layout>
  );
}
