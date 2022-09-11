import AccordionTS from "@snippets/Accordion/AccordionTS";
import React from "react";

import Layout from "../../components/Layout";

export default function accordion() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Accordion</h1>
        <p className="pb-4">
          An accordion is a collapsible and expandable component where selecting
          the heading of each section allow for the toggling of it contents.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-accordion</li>
          <li>ch-accordionTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Accordions only takes one prop, data. It is an array of objects.</p>
        <p>
          In the TS variant the object is defined as the AccordionData type.
        </p>
        AccordionData:
        <ul>
          <li>title: string</li>
          <li>content: ReactNode</li>
        </ul>
        Example: An example of the data is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <AccordionTS
          data={[
            {
              title: "Title 1",
              content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
            },
            { title: "Title 2", content: <div>Title2 Content</div> },
            { title: "Title 3", content: <a>Title3 Content</a> },
          ]}
        />
      </div>
    </Layout>
  );
}
