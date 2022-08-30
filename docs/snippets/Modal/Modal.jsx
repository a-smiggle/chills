import React, { Fragment } from "react";

function Modal({ open, toggle }) {
  if (open)
    return (
      <Fragment>
        <div
          onClick={() => toggle(!open)}
          className="fixed inset-0 bg-gray-400 cursor-pointer"
        ></div>
        <div className="flex justify-center items-center my-auto ">
          <div className="max-w-xs md:max-w-5xl z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 shadow-lg rounded-lg">
            <h1 className="text-xl font-bold">I&apos;m A modal.</h1>
            <p>Click outside me to close.</p>
          </div>
        </div>
      </Fragment>
    );
  return null;
}

export default Modal;
