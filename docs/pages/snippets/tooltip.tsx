import TooltipTS from "@snippets/Tooltip/TooltipTS";
import React from "react";

import Layout from "../../components/Layout";

export default function tooltip() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Tootlips</h1>
        <p className="pb-4">
          Creates an easy to use tooltips component that allows for popups on
          hover of an element.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-tooltip</li>
          <li>ch-tooltipTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Tooltips take the following props:</p>
        <ul>
          <li>children: ReactNode</li>
          <li>
            position?: &qout;left&qout; | &qout;right&qout; | &qout;bottom&qout;
            | &qout;top&qout;
          </li>
        </ul>
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
            Top
            <TooltipTS>Yay you hovered over me.</TooltipTS>
          </div>
          <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
            Bottom
            <TooltipTS position="bottom">Yay you hovered over me.</TooltipTS>
          </div>
          <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
            Left
            <TooltipTS position="left">Yay you hovered over me.</TooltipTS>
          </div>
          <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
            Right
            <TooltipTS position="right">Yay you hovered over me.</TooltipTS>
          </div>
        </div>
      </div>
    </Layout>
  );
}
