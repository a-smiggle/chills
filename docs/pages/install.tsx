import React from "react";

import Layout from "../components/Layout";

export default function install() {
  return (
    <Layout>
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col md:flex-row justify-between gap-4 p-4">
        <div className="flex h-full w-full flex-col">
          <h1 className="pb-4 text-2xl font-bold">Installation</h1>
          <p>Installing Chills is as easy as following the below steps.</p>
          <p>
            1. Go to extensions.{" "}
            <a className="rounded border bg-gray-300 p-1 text-black">
              Ctrl+Shift+X
            </a>
          </p>
          <p>
            2. Type in{" "}
            <a className="rounded border bg-gray-300 p-1 text-black">chills</a>
          </p>
          <p>3. Click Install</p>
        </div>
        <div className="flex h-full w-full flex-col">
          <h1 className="pb-4 text-2xl font-bold">Usage</h1>
          <p>1. Open a JSX or TSC file.</p>
          <p>
            2. Type in{" "}
            <a className="rounded border bg-gray-300 p-1 text-black">ch-</a>{" "}
            prefix
          </p>
          <p>3. Select required component.</p>
          <p>4. Import your new component into your page.</p>
          <p>5. Customize your component.</p>
        </div>
      </div>
    </Layout>
  );
}
