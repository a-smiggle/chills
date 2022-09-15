import React, { useEffect, useState } from "react";

/**
 * Example 10 day countdown:
 * <Countdown date={new Date().setDate(new Date().getDate() + 10)} />
 */

export default function Countdown({ date }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(date)) {
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
    }
  };

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);

  return (
    <div className="grid md:gap-4 md:grid-cols-4 text-black dark:text-slate-300">
      <div className="relative flex h-12 w-24 flex-row items-center justify-between overflow-y-hidden p-4">
        <span className={`pb-4 text-4xl font-semibold transition-all`}>
          {days}
        </span>
        <h1 className="pb-4">Days</h1>
      </div>
      <div className="flex h-12 w-fit flex-row items-center justify-between p-4">
        <div className="flex relative flex-col overflow-y-none pr-2 h-4">
          {Array.from({ length: 24 }, (x, i) => i)
            .map((item) => (
              <span
                key={item}
                className={`text-4xl font-semibold transition-all ${
                  item === hours
                    ? "absolute top-1/2 -translate-y-1/2 pb-4"
                    : `top-0 opacity-0`
                }`}
              >
                {item}
              </span>
            ))
            .reverse()}
        </div>

        <h1 className="pb-4">Hours</h1>
      </div>
      <div className="flex h-12 w-fit flex-row items-center p-4">
        <div className="flex relative flex-col overflow-y-none pr-2 h-4">
          {Array.from({ length: 60 }, (x, i) => i)
            .map((item) => (
              <span
                key={item}
                className={`text-4xl font-semibold transition-all ${
                  item === minutes
                    ? "absolute top-1/2 -translate-y-1/2 pb-4"
                    : `top-0 opacity-0`
                }`}
              >
                {item}
              </span>
            ))
            .reverse()}
        </div>
        <h1 className="pb-4">Minutes</h1>
      </div>
      <div className="flex h-12 w-fit flex-row items-center justify-between p-4">
        <div className="flex relative flex-col overflow-y-none pr-2 h-4">
          {Array.from({ length: 60 }, (x, i) => i)
            .map((item) => (
              <span
                key={item}
                className={`text-4xl font-semibold transition-all ${
                  item === seconds
                    ? "absolute top-1/2 -translate-y-1/2 pb-4"
                    : `top-0 opacity-0`
                }`}
              >
                {item}
              </span>
            ))
            .reverse()}
        </div>
        <h1 className="pb-4">Seconds</h1>
      </div>
    </div>
  );
}
