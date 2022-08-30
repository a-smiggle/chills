import React, { Fragment } from "react";

export default function SpinnerTS({
  closed,
  dashed,
}: {
  closed?: boolean;
  dashed?: boolean;
}) {
  return (
    <Fragment>
      <div
        className={`relative z-20 h-32  w-32 animate-spin rounded-full border-t-2 border-green-500 ${
          dashed ? "border-dashed" : ""
        }`}
      />
      {closed ? (
        <div className="absolute z-10 h-32 w-32 rounded-full border-2 border-gray-300" />
      ) : null}
    </Fragment>
  );
}
