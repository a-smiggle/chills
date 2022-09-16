import React from "react";

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

export default function Card({ loading, title, body, action }) {
  if (loading)
    return (
      <div className="h-[28rem] w-96 bg-white dark:bg-slate-800 p-4 rounded border border-black dark:border-slate-300 shadow-lg">
        <div className="w-full h-full animate-pulse bg-slate-300 rounded"></div>
      </div>
    );
  return (
    <div className="h-fit max-h-[28rem] w-96 bg-white dark:bg-slate-800 text-black dark:text-slate-300 p-4 rounded border border-black dark:border-slate-300 shadow-lg flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className={`${action ? "max-h-[24rem]" : ""} overflow-auto`}>
        <p className="text-lg">{body}</p>
      </div>

      <div className="flex flex-row justify-end">{action}</div>
    </div>
  );
}
