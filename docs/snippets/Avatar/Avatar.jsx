import React from "react";

export default function Avatar({ image, title }) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    shape: "rounded-md",
  };

  return (
    <a href="#" title={title ?? "Avatar"} className="block relative">
      <img
        alt="profile"
        src={image || "https://api.lorem.space/image/face?w=150&h=150"}
        className={`object-cover ${STYLES.height} ${STYLES.width} ${STYLES.shape}`}
      />
    </a>
  );
}
