import React from "react";

export default function AvatarTS({
  image,
  title,
}: {
  image: string;
  title?: string;
}) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    shape: "rounded-md",
  };

  return (
    <a href="#" title={title ?? "Avatar"} className="relative block">
      <img
        alt="profile"
        src={image}
        className={`object-cover ${STYLES.height} ${STYLES.width} ${STYLES.shape}`}
      />
    </a>
  );
}
