import React, { Dispatch, Fragment, SetStateAction } from "react";

function Modal({
  open,
  toggle,
}: {
  open: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) {
  if (open)
    return (
      <Fragment>
        <div
          onClick={() => toggle(!open)}
          className="fixed inset-0 cursor-pointer bg-gray-400"
        ></div>
        <div className="my-auto flex items-center justify-center ">
          <div className="z-10 max-w-xs rounded-lg bg-white p-4 text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white md:max-w-5xl">
            <h1 className="text-xl font-bold">I'm A modal.</h1>
            <p>Click outside me to close.</p>
          </div>
        </div>
      </Fragment>
    );
  return null;
}

export default Modal;
