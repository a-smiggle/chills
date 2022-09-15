import React from "react";

import Layout from "../../components/Layout";
import Carousel from "../../snippets/Carousel/CarouselTS";

export default function CarouselPage() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Carousel</h1>
        <p className="pb-4">Creates an easy to use carousel component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-carousel</li>
          <li>ch-carouselTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Carousel takes the following props:</p>
        <ul>
          <li>data: CarouselData[]</li>
          <li>fullscreen?: boolean</li>
          <li>timer?: boolean</li>
          <li>interval?: number</li>
          <li>arrows?: boolean</li>
          <li>dots?: boolean</li>
        </ul>
        <br />
        <p>CarouselData contains the following props:</p>
        <ul>
          <li>title?: string</li>
          <li>description?: string</li>
          <li>show?: boolean</li>
          <li>element: ReactNode</li>
          <li>video?: boolean;</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <Carousel
          timer
          fullscreen
          arrows
          dots
          data={[
            {
              element: (
                <img
                  className="w-full object-cover"
                  src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              ),
            },
            {
              element: (
                <img
                  className="w-full object-cover"
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              ),
            },
          ]}
        />
      </div>
    </Layout>
  );
}
