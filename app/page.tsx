"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    // const target = new Date("12/31/2024 23:59:59");
    const target = new Date("03/14/2024 18:14:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(days);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(seconds);
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <div>
          {" "}
          <h1> This is Party Time!</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </div>
      ) : (
        <>
          <div className="bg-gray-900 text-white p-40 rounded-xl">
            <div className="flex justify-center px-8">
              <div className="timer-wrapper">
                <div className="timer-inner">
                  <div className="timer-segment">
                    <span className="text-4xl font-bold">{days}</span>
                    <span className="text-xl block">Days</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="text-4xl font-bold">{hours}</span>
                    <span className="text-xl block">Hours</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="text-4xl font-bold">{minutes}</span>
                    <span className="text-xl block">Minutes</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="text-4xl font-bold">{seconds}</span>
                    <span className="text-xl block">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/background.jpg"
            alt="Background image"
            layout="fill"
            quality={100}
          />
        </>
      )}
    </div>
  );
}
