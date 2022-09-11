import React from "react";

/**
 * Example:
 * <CodeTS code={["Hello", `   World`]} />
 */

export default function CodeTS({ code }: { code: string[] }) {
  return (
    <div className="relative pb-4 rounded-lg bg-gray-800 text-slate-300 border-2 border-transparent hover:border-gray-300 transition-colors duration-300 cursor-text">
      <div className="flex justify-end pb-2 gap-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:bg-gray-500 hover:text-white"
        >
          <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:bg-gray-500 hover:text-white"
        >
          <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:bg-red-500 hover:text-white"
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
      </div>
      {code.map((line, index) => (
        <pre key={`Code Line: ${index}`} className="overflow-hidden pl-4">
          <code>{line}</code>
        </pre>
      ))}

      <div className="pl-2 animate-[pulse_1000ms_infinite]">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc></desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 12h4"></path>
          <path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3"></path>
          <path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3"></path>
        </svg>
      </div>
    </div>
  );
}
