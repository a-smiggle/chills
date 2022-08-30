// Edit rounded-full to change shape
// Replace blue with required color
import React from "react";

export default function ButtonIconTS({
  type,
  onClick,
  disabled,
}: {
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}) {
  const STYLES = {
    base: "flex justify-center items-center gap-2 py-2 px-2   w-full transition ease-in duration-200   focus:outline-none enabled:focus:ring-2 enabled:focus:ring-offset-2 enabled:active:scale-90 disabled:cursor-not-allowed",
    shadow: "shadow-md",
    shape: "rounded-full",
    color:
      "bg-blue-600 enabled:hover:bg-blue-700 enabled:focus:ring-blue-500 enabled:focus:ring-offset-blue-200",
    text: "text-white text-center text-base font-semibold",
  };

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${STYLES.base} ${STYLES.shadow} ${STYLES.color} ${STYLES.shape} ${STYLES.text}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </button>
  );
}
