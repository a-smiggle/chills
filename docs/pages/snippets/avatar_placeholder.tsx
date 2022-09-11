import AvatarPlaceholderTS from "@snippets/Avatar/AvatarPlaceholderTS";
import React from "react";

import Layout from "../../components/Layout";

export default function avatarPlaceholder() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Avatar</h1>
        <p className="pb-4">
          An avatar placeholder allows an easy method to showcase a users
          initials if no image is provided.
        </p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-avatarPlaceholder</li>
          <li>ch-avatarPlaceholderTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Avatar Placeholder takes the following props:</p>
        <ul>
          <li>title?: string</li>
          <li>placeholder: string</li>
          <li>link?: string</li>
        </ul>
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <AvatarPlaceholderTS placeholder="PH" title="PH" link="#" />
      </div>
    </Layout>
  );
}
