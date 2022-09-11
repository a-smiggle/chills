import React from "react";

/**
 * Example:
 * <AvatarTS image="https://api.lorem.space/image/face?w=150&h=150" title="Avatar" link="#"/>
 */

export default function AvatarTS({
  link,
  image,
  title,
}: {
  link?: string;
  image: string;
  title?: string;
}) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    shape: "rounded-md",
  };

  return (
    <a href={link} title={title ?? "Avatar"} className="relative block">
      <img
        alt="profile"
        src={image}
        className={`object-cover ${STYLES.height} ${STYLES.width} ${STYLES.shape}`}
      />
    </a>
  );
}
