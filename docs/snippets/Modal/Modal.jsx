import React, { Fragment } from "react";

/**
 * Example:
 * <Button onClick={() => setOpen(true)}>Open</Button>
   <ModalLogin open={open} toggle={setOpen} />
 */

export default function Modal({ open, toggle }) {
  if (open)
    return (
      <Fragment>
        <div
          onClick={() => toggle(!open)}
          className="fixed inset-0 z-[100] bg-gray-700/90 cursor-pointer"
        ></div>
        <div className="z-[110] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center my-auto ">
          <div className="max-w-xs md:max-w-5xl z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 shadow-lg rounded-lg">
            <h1 className="text-xl font-bold">I&apos;m A modal.</h1>
            <p>Click outside of me to close.</p>
          </div>
        </div>
      </Fragment>
    );
  return null;
}
