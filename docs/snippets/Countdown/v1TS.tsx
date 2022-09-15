import React, { useEffect, useState } from "react";

/**
 * Example 10 day countdown:
 * <Countdown date={new Date().setDate(new Date().getDate() + 10)} />
 */

export default function Countdown({ date }: { date: number }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    const now = new Date();
    const difference = date - now.getTime();
    if (difference > 1) {
      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }
  };

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="relative flex h-24 w-24 flex-col items-center justify-between overflow-y-hidden rounded-lg bg-white p-4 text-black shadow dark:bg-slate-700 dark:text-slate-300">
        <span
          className={`absolute top-1/2 -translate-y-1/2 pb-4 text-4xl font-semibold transition-all`}
        >
          {days}
        </span>
        <h1 className="absolute bottom-0 pb-4">Days</h1>
      </div>
      <div className="relative flex h-24 w-24 flex-col items-center justify-between overflow-y-hidden rounded-lg bg-white p-4 text-black shadow dark:bg-slate-700 dark:text-slate-300">
        {Array.from({ length: 24 }, (x, i) => i)
          .map((item) => (
            <span
              key={item}
              className={`text-4xl font-semibold transition-all ${
                item === hours
                  ? "absolute top-1/2 -translate-y-1/2 pb-4"
                  : `absolute top-0 opacity-0`
              }`}
            >
              {item}
            </span>
          ))
          .reverse()}
        <h1 className="absolute bottom-0 pb-4">Hours</h1>
      </div>
      <div className="relative flex h-24 w-24 flex-col items-center justify-between overflow-y-hidden rounded-lg bg-white p-4 text-black shadow dark:bg-slate-700 dark:text-slate-300">
        {Array.from({ length: 60 }, (x, i) => i)
          .map((item) => (
            <span
              key={item}
              className={`text-4xl font-semibold transition-all ${
                item === minutes
                  ? "absolute top-1/2 -translate-y-1/2 pb-4"
                  : `absolute top-0 opacity-0`
              }`}
            >
              {item}
            </span>
          ))
          .reverse()}
        <h1 className="absolute bottom-0 pb-4">Minutes</h1>
      </div>
      <div className="relative flex h-24 w-24 flex-col items-center justify-between overflow-y-hidden rounded-lg bg-white p-4 text-black shadow dark:bg-slate-700 dark:text-slate-300">
        {Array.from({ length: 60 }, (x, i) => i)
          .map((item) => (
            <span
              key={item}
              className={`text-4xl font-semibold transition-all ${
                item === seconds
                  ? "absolute top-1/2 -translate-y-1/2 pb-4"
                  : `absolute top-0 opacity-0`
              }`}
            >
              {item}
            </span>
          ))
          .reverse()}
        <h1 className="absolute bottom-0 pb-4">Seconds</h1>
      </div>
    </div>
  );
}
