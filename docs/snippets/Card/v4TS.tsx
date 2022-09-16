import React, { ReactNode } from "react";

/** 
 * Example:
 * <Card
      title="Hello"
      image="https://placeimg.com/200/280/arch"
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
  image,
  alt,
  title,
  body,
  action,
}: {
  loading?: boolean;
  image?: string;
  alt?: string;
  title?: string;
  body?: string;
  action?: ReactNode;
}) {
  if (loading)
    return (
      <div className="flex h-[28rem] w-96 flex-col rounded border border-black bg-white shadow-lg dark:border-slate-300 dark:bg-slate-800 md:h-[18rem] md:w-[36rem] md:flex-row">
        <div className=" h-1/2 w-full animate-pulse rounded-t bg-slate-300 md:h-full md:w-1/4"></div>
        <div className="h-full w-full p-4 ">
          <div className="h-full w-full animate-pulse rounded bg-slate-300"></div>
        </div>
      </div>
    );
  return (
    <div className="flex h-fit w-96 flex-col rounded border border-black bg-white text-black shadow-lg dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300 md:max-h-[18rem] md:w-[36rem] md:flex-row">
      <img alt={alt} src={image} />
      <div className="flex flex-col gap-4 overflow-hidden p-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className={`${action ? "max-h-[8rem]" : ""} overflow-auto`}>
          <p className="text-lg">{body}</p>
        </div>

        <div className="flex flex-row justify-end">{action}</div>
      </div>
    </div>
  );
}
