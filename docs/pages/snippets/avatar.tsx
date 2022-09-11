import AvatarTS from "@snippets/Avatar/AvatarTS";
import React from "react";

import Layout from "../../components/Layout";

export default function avatar() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Avatar</h1>
        <p className="pb-4">
          An avatar allows an easy method to showcase a users profile image.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-avatar</li>
          <li>ch-avatarTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Avatar takes the following props:</p>
        <ul>
          <li>title?: string</li>
          <li>image: string</li>
          <li>link?: string</li>
        </ul>
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <AvatarTS
          image="https://api.lorem.space/image/face?w=150&h=150"
          title="Avatar"
          link="#"
        />
      </div>
    </Layout>
  );
}
