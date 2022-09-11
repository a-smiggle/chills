import React, { Dispatch, Fragment, SetStateAction } from "react";

/**
 * Example:
 * <ButtonTS onClick={() => setOpen(true)}>Open</ButtonTS>
   <ModalTS open={open} toggle={setOpen} />
 */

export default function ModalTS({
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
          className="fixed inset-0 z-[100] cursor-pointer bg-gray-700/90"
        ></div>
        <div className="fixed top-1/2 left-1/2 z-[110] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center">
          <div className="z-10 max-w-xs rounded-lg bg-white p-4 text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white md:max-w-5xl">
            <h1 className="text-xl font-bold">I&apos;m A modal.</h1>
            <p>Click outside of me to close.</p>
          </div>
        </div>
      </Fragment>
    );
  return null;
}
