'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  expiryDate?: Date;
}

export default function Countdown({ expiryDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 9,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 items-center">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-black">{pad(timeLeft.hours)}</span>
        <span className="text-xs text-black mt-1">Hours</span>
      </div>
      <span className="text-3xl font-bold text-black">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-black">{pad(timeLeft.minutes)}</span>
        <span className="text-xs text-black mt-1">Minutes</span>
      </div>
      <span className="text-3xl font-bold text-black">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-black">{pad(timeLeft.seconds)}</span>
        <span className="text-xs text-black mt-1">Seconds</span>
      </div>
    </div>
  );
}