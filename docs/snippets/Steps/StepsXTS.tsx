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
 * <StepXTS
    steps={[
      { title: "Start", completed: true },
      { title: "Middle", completed: false },
      { title: "End", completed: false },
    ]}
  />
 */

export type StepData = {
  title: string;
  completed: boolean;
};

export default function StepsX({ steps }: { steps: StepData[] }) {
  return (
    <div className="relative flex w-full justify-between">
      <div className="absolute inset-x-2 top-5 z-10 h-2 bg-gray-300">
        <div
          style={{
            width: `${
              (steps.filter((step) => step.completed === true).length * 100) /
              (steps.length - 1)
            }%`,
          }}
          className="absolute z-20 h-2 bg-green-500"
        ></div>
      </div>
      {steps.map((step, index) => {
        if (index === 0) {
          return (
            <div
              key={`Step: ${step.title}`}
              className="z-30 flex flex-col items-center"
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
          );
        }
        if (steps.length - 1 === index) {
          return (
            <div
              key={`Step: ${step.title}`}
              className="z-20 flex flex-col items-end "
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
          );
        }

        return (
          <div
            key={`Step: ${step.title}`}
            className="z-20 flex flex-col items-center "
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
        );
      })}
    </div>
  );
}
