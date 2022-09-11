import SuccessAlertTS from "@snippets/Alert/SuccessAlertTS";
import React from "react";

import Layout from "../../components/Layout";

export default function successAlert() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Success Alert</h1>
        <p className="pb-4">
          An success alert is a clear and easy way to show important information
          on the screen.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-successAlert</li>
          <li>ch-successAlertTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Alerts take the following props:</p>
        <ul>
          <li>title: string</li>
          <li>details?: string</li>
          <li>timestamp?: string</li>
          <li>actions?: ReactNode</li>
        </ul>
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <SuccessAlertTS
          title="Alert"
          details="I am an Alert."
          timestamp="Tue, 06 Sep 2022 22:57:04 GMT"
          actions={
            <div className="w-fit">
              <button className="rounded bg-red-500 p-1 text-white transition-all hover:bg-red-400 active:scale-90">
                Close
              </button>
            </div>
          }
        />
      </div>
    </Layout>
  );
}
