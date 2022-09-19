// To close on click outside this can be used: https://usehooks-ts.com/react-hook/use-on-click-outside
// import { useOnClickOutside } from 'usehooks-ts';
import React, { Dispatch, ReactNode, SetStateAction, useRef } from "react";

export default function Drawer({
  open,
  toggle,
  absolute,
  position,
  children,
}: {
  open: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  absolute?: boolean;
  position?: "top" | "bottom" | "right" | "left";
  children: ReactNode;
}) {
  const POS = position ?? "left";
  const POSITION = {
    top: `h-1/2 w-full ${open ? "top-0 left-0" : "-top-[100%] left-0"}`,
    bottom: `h-1/2 w-full ${
      open ? "bottom-0 left-0" : "-bottom-[100%] left-0"
    }`,
    left: `w-1/2 h-full ${open ? "top-0 left-0" : "top-0 -left-[100%]"}`,
    right: `w-1/2 h-full ${open ? "top-0 right-0" : "top-0 -right-[100%]"}`,
  };

  const ref = useRef(null);

  /* const handleOutsideClick = () => {
    if (props.open && props.toggle) props.toggle(false);
  };

  useOnClickOutside(ref, handleOutsideClick); */

  return (
    <aside
      ref={ref}
      className={`bg-white text-black dark:bg-slate-700 dark:text-slate-300 ${
        absolute ? "absolute" : "fixed"
      } z-50 overflow-auto transition-all duration-300 ease-in-out ${
        POSITION[POS]
      }`}
    >
      {children}
    </aside>
  );
}
