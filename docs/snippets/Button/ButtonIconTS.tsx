// Edit rounded-full to change shape
// Replace blue with required color
import React, { ReactNode } from "react";

export default function ButtonIconTS({
  type,
  onClick,
  disabled,
  children,
}: {
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  children: ReactNode;
}) {
  const STYLES = {
    base: "flex justify-center items-center gap-2 py-2 px-2 w-fit h-fit transition ease-in duration-200   focus:outline-none enabled:focus:ring-2 enabled:focus:ring-offset-2 enabled:active:scale-90 disabled:cursor-not-allowed",
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
      {children}
    </button>
  );
}
