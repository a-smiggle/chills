import React from "react";

/**
 * Example:
 * <AvatarPlaceholder
      placeholder="PH"
        title="PH"
        link="#"
      />
 */

export default function AvatarPlaceholder({ link, placeholder, title }) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    shape: "rounded-md",
    color: "bg-gray-700",
    text: "text-3xl text-gray-300",
  };

  return (
    <a href={link} title={title ?? "Avatar"} className="block relative">
      <div
        className={`${STYLES.height} ${STYLES.width} ${STYLES.shape} ${STYLES.color} place-items-center grid`}
      >
        <span className={`${STYLES.text}`}>{placeholder}</span>
      </div>
    </a>
  );
}
