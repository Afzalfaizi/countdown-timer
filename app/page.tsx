"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState<number | undefined>(undefined);
  const [hours, setHours] = useState<number | undefined>(undefined);
  const [minutes, setMinutes] = useState<number | undefined>(undefined);
  const [seconds, setSeconds] = useState<number | undefined>(undefined);

  useEffect(() => {
    // const target = new Date("12/31/2024 23:59:59");
    const target = new Date("03/15/2024 16:32:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <h1 className=" text-black text-[72px] text-center mt-20 font-bold  ">
          <h1 className=" text-red-700">Notice!</h1>
          {" "}
          The 1st class of <span className=" text-red-700"> Quarter 3 </span>
          has been held this <span className=" text-red-700">
            {" "}
            Sunday{" "}
          </span>{" "}
          from <span className=" text-red-700"> 9 am to 12 pm </span> due to
          Ramadan!
        </h1>
      ) : (
        <>
          <div className=" text-black p-40 rounded-xl">
            <div className="flex justify-center px-8">
              <div className="timer-wrapper">
                <div className="timer-inner">
                  <div className="timer-segment">
                    <span className="time">{days}</span>
                    <span className="label">Days</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="time">{hours}</span>
                    <span className="label">Hours</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="time">{minutes}</span>
                    <span className="label">Minutes</span>
                  </div>
                  <span className="divider">:</span>
                  <div className="timer-segment">
                    <span className="time">{seconds}</span>
                    <span className="label">Seconds</span>
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
