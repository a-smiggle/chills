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
 * <StepsX
  steps={[
    { title: "Start", completed: true },
    { title: "Middle", completed: false },
    { title: "End", completed: false },
  ]}
/>
*/

export default function StepsX({ steps }) {
  return (
    <div className="relative flex justify-between w-full">
      <div className="absolute inset-x-2 top-5 z-10 h-2 bg-gray-300">
        <div
          style={{
            width: `${
              (steps.filter((step) => step.completed === true).length * 100) /
              (steps.length - 1)
            }%`,
          }}
          className="absolute h-2 bg-green-500 z-20"
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
                className={`w-10 h-10 p-4 flex justify-center items-center text-center rounded-full font-medium ${
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
                className={`w-10 h-10 p-4 flex justify-center items-center text-center rounded-full font-medium ${
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
              className={`w-10 h-10 p-4 flex justify-center items-center text-center rounded-full font-medium ${
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
