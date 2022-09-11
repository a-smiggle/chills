import React from "react";

/** Example data:
   const STEPS = [
    { title: "Start", completed: true },
    { title: "In Progress", completed: false },
    { title: "Testing", completed: false },
    { title: "Completed", completed: false },
  ];
 */

/**
 * Example:
 * <StepsY
    steps={[
      { title: "Start", completed: true },
      { title: "Middle", completed: false },
      { title: "End", completed: false },
    ]}
  />
 */

export default function StepsY({ steps }) {
  return (
    <div className="relative flex flex-col justify-between w-fit h-full py-2">
      <div className="absolute left-4 top-8 w-2 h-[calc(100%-4rem)] bg-gray-300 z-10">
        <div
          style={{
            height: `${
              (steps.filter((step) => step.completed === true).length * 100) /
              (steps.length - 1)
            }%`,
          }}
          className="absolute w-2 bg-green-500 z-20"
        ></div>
      </div>
      {steps.map((step, index) => (
        <div
          key={`Step: ${step.title}`}
          className="z-20 flex flex-row items-center gap-2"
        >
          <div
            className={`w-10 h-10 p-4 flex justify-center items-center text-center rounded-full font-medium ${
              step.completed ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
          >
            {index}
          </div>
          {step.title}
        </div>
      ))}
    </div>
  );
}
