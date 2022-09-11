import AvatarClipTS from "@snippets/Avatar/AvatarClipTS";
import React from "react";

import Layout from "../../components/Layout";

export default function avatarClip() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Avatar Clip</h1>
        <p className="pb-4">
          An avatar allows an easy method to showcase a users profile images
          with a clip path over the image.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-avatarClip</li>
          <li>ch-avatarClipTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Avatar takes the following props:</p>
        <ul>
          <li>title?: string</li>
          <li>image: string</li>
          <li>link?: string</li>
          <li>
            variant: &qout;triangle&qout; | &qout;trapezoid&qout; |
            &qout;rhombus&qout; | &qout;pentagon&qout; | &qout;hexagon&qout; |
            &qout;heptagon&qout; | &qout;octagon&qout; | &qout;nonagon&qout; |
            &qout;decagon&qout; | &qout;bevel&qout; | &qout;star&qout; |
            &qout;ellipse&qout; | &qout;ellipse2&qout;
          </li>
        </ul>
        <br></br>
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <div className="flex flex-wrap gap-4">
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="triangle"
            link="#"
            variant="triangle"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="trapezoid"
            link="#"
            variant="trapezoid"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="rhombus"
            link="#"
            variant="rhombus"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="pentagon"
            link="#"
            variant="pentagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="hexagon"
            link="#"
            variant="hexagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="heptagon"
            link="#"
            variant="heptagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="octagon"
            link="#"
            variant="octagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="nonagon"
            link="#"
            variant="nonagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="decagon"
            link="#"
            variant="decagon"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="bevel"
            link="#"
            variant="bevel"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="star"
            link="#"
            variant="star"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="ellipse"
            link="#"
            variant="ellipse"
          />
          <AvatarClipTS
            image="https://api.lorem.space/image/face?w=150&h=150"
            title="ellipse2"
            link="#"
            variant="ellipse2"
          />
        </div>
      </div>
    </Layout>
  );
}
