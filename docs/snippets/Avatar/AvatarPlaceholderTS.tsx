import React from "react";

/**
 * Example:
 * <AvatarPlaceholderTS
      placeholder="PH"
        title="PH"
        link="#"
      />
 */

export default function AvatarPlaceholderTS({
  link,
  placeholder,
  title,
}: {
  link?: string;
  placeholder: string;
  title?: string;
}) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    shape: "rounded-md",
    color: "bg-gray-700",
    text: "text-3xl text-gray-300",
  };

  return (
    <a href={link} title={title ?? "Avatar"} className="relative block">
      <div
        className={`${STYLES.height} ${STYLES.width} ${STYLES.shape} ${STYLES.color} grid place-items-center`}
      >
        <span className={`${STYLES.text}`}>{placeholder}</span>
      </div>
    </a>
  );
}
