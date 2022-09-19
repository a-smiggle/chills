import Drawer from "@snippets/Drawer/DrawerTS";
import React, { useState } from "react";

import Layout from "../../components/Layout";

export default function DrawerPage() {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [top, setTop] = useState(false);
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Drawer</h1>
        <p className="pb-4">Creates an easy to use drawer component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-drawer</li>
          <li>ch-drawerTS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Drawer takes the following props:</p>
        <ul>
          <li>open: boolean</li>
          <li>toggle?: Dispatch&#60;SetStateAction&lt;boolean&rt;&rt;</li>
          <li>absolute?: boolean</li>
          <li>
            position?: &quot;top&quot; | &quot;bottom&quot; | &quot;right&quot;
            | &quot;left&quot;
          </li>
          <li>children: ReactNode</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="flex gap-2">
          <button
            className="rounded bg-sky-500 p-2 text-white transition-all active:scale-90"
            onClick={() => setLeft(!left)}
          >
            Toggle Left
          </button>
          <button
            className="rounded bg-sky-500 p-2 text-white transition-all active:scale-90"
            onClick={() => setRight(!right)}
          >
            Toggle Right
          </button>
          <button
            className="rounded bg-sky-500 p-2 text-white transition-all active:scale-90"
            onClick={() => setBottom(!bottom)}
          >
            Toggle Bottom
          </button>
          <button
            className="rounded bg-sky-500 p-2 text-white transition-all active:scale-90"
            onClick={() => setTop(!top)}
          >
            Toggle Top
          </button>
        </div>
        <Drawer open={left}>
          <div className="flex justify-end p-4">
            <button
              className="rounded bg-red-500 p-2 text-white transition-all active:scale-90"
              onClick={() => setLeft(!left)}
            >
              Close
            </button>
          </div>
        </Drawer>
        <Drawer open={right} position="right">
          <div className="flex justify-start p-4">
            <button
              className="rounded bg-red-500 p-2 text-white transition-all active:scale-90"
              onClick={() => setRight(!right)}
            >
              Close
            </button>
          </div>
        </Drawer>
        <Drawer open={bottom} position="bottom">
          <div className="flex justify-end p-4">
            <button
              className="rounded bg-red-500 p-2 text-white transition-all active:scale-90"
              onClick={() => setBottom(!bottom)}
            >
              Close
            </button>
          </div>
        </Drawer>
        <Drawer open={top} position="top">
          <div className="relative w-full h-full">
            <button
              className="absolute bottom-4 right-4 rounded bg-red-500 p-2 text-white transition-all active:scale-90"
              onClick={() => setTop(!top)}
            >
              Close
            </button>
          </div>
        </Drawer>
      </div>
    </Layout>
  );
}
