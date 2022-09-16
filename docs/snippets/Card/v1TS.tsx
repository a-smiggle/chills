import React, { ReactNode } from "react";

/**
 * Example:
 *  <Card
      title="Hello"
      body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
      action={
        <button className="flex w-fit items-center justify-center gap-2 rounded bg-red-500 px-4 py-2 text-lg font-semibold transition-colors duration-300 hover:text-white active:scale-90 disabled:scale-100">
          More ..
        </button>
      }
    />
 */

export default function Card({
  loading,
  title,
  body,
  action,
}: {
  loading?: boolean;
  title?: string;
  body?: string;
  action?: ReactNode;
}) {
  if (loading)
    return (
      <div className="h-[28rem] w-96 rounded border border-black bg-white p-4 shadow-lg dark:border-slate-300 dark:bg-slate-800">
        <div className="h-full w-full animate-pulse rounded bg-slate-300"></div>
      </div>
    );
  return (
    <div className="flex h-fit max-h-[28rem] w-96 flex-col gap-4 rounded border border-black bg-white p-4 text-black shadow-lg dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className={`${action ? "max-h-[24rem]" : ""} overflow-auto`}>
        <p className="text-lg">{body}</p>
      </div>

      <div className="flex flex-row justify-end">{action}</div>
    </div>
  );
}
