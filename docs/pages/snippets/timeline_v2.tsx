import Timeline from "@snippets/Timeline/v2TS";
import React from "react";

import Layout from "../../components/Layout";

export default function TimelineV2() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Timeline V2</h1>
        <p className="pb-4">Creates an easy to use timeline component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-timelineV1</li>
          <li>ch-timelineV1TS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Timeline takes the following props:</p>
        <ul>
          <li>data: TimelineData[]</li>
        </ul>
        <br />
        <p>TimelineData consists of the following:</p>
        <ul>
          <li>date: string</li>
          <li>title: string</li>
          <li>body: string</li>
          <li>action?: RectNode;</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="rounded bg-white p-4 dark:bg-slate-800">
          <Timeline
            data={[
              {
                date: "19.09.2022",
                title: "One",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
              },
              {
                date: "20.09.2022",
                title: "Two",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
              },
              {
                date: "21.09.2022",
                title: "Three",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
                action: (
                  <button className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded border border-emerald-500 px-4 py-2 text-lg font-semibold transition-colors duration-300 hover:bg-emerald-500 hover:text-white active:scale-90 disabled:scale-100 disabled:cursor-not-allowed">
                    Read More
                  </button>
                ),
              },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
