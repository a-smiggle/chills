import React from "react";

/** Example data:
   const STEPS = [
    { title: "Start", completed: true },
    { title: "In Progress", completed: false },
    { title: "Testing", completed: false },
    { title: "Completed", completed: false },
  ];
 */

export type StepData = {
  title: string;
  completed: boolean;
};

export default function StepsY({ steps }: { steps: StepData[] }) {
  return (
    <div className="relative flex h-full w-fit flex-col justify-between py-8">
      <div className="absolute left-4 top-8 z-10 h-[calc(100%-4rem)] w-2 bg-gray-300">
        <div
          style={{
            height: `${
              (steps.filter((step) => step.completed === true).length * 100) /
              (steps.length - 1)
            }%`,
          }}
          className="absolute z-20 w-2 bg-green-500"
        ></div>
      </div>
      {steps.map((step, index) => (
        <div
          key={`Step: ${step.title}`}
          className="z-20 flex flex-row items-center gap-2"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full p-4 text-center font-medium ${
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
