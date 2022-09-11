import TabsVerticalTS from "@snippets/Tabs/TabsVerticalTS";
import React from "react";

import Layout from "../../components/Layout";

export default function tabsVertical() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Tabs Vertical</h1>
        <p className="pb-4">
          Creates an easy to use Tabs component that allows for toggling between
          elements. The tabs are vertical along the left of the screen.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-tabsVertical</li>
          <li>ch-tabsVerticalTS</li>
        </ul>
        <br />
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Tabs takes the following props:</p>
        <ul>
          <li>data: TabData[]</li>
          <li>stretched: boolean</li>
        </ul>
        <br />
        <p>TabData contains the following props:</p>
        <ul>
          <li>title: string</li>
          <li>content: ReactNode</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="flex flex-col gap-4">
          <div className="h-64 rounded border-2 bg-sky-300 p-2 dark:bg-sky-800">
            <TabsVerticalTS
              data={[
                { title: "Tab1", content: "Tab1 content" },
                { title: "Tab2", content: "Tab2 content" },
              ]}
            />
          </div>
          <div
            title="Stretched"
            className="h-64 w-full rounded border-2 bg-sky-300 p-2 dark:bg-sky-800"
          >
            <TabsVerticalTS
              stretched
              data={[
                { title: "Tab1", content: "Tab1 content" },
                { title: "Tab2", content: "Tab2 content" },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
