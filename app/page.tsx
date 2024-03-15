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
    const target = new Date("03/15/2024 18:59:00");

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
        <h1 className=" text-black lg:text-[72px] sm:text-[35px] text-center mt-20 font-bold  ">
          <h1 className=" text-red-700">Notice!</h1> The 1st class of{" "}
          <span className=" text-red-700"> Quarter 3 </span>
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
                  <div className=" flex flex-col text-center">
                    <span className="text-[7rem] text-red-700">{days}</span>
                    <span className="text-[2rem] text-black font-bold">
                      {" "}
                      Days{" "}
                    </span>
                  </div>
                  <span className=" text-[7rem] p-[0.2rem] text-black">:</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[7rem] text-red-700">{hours}</span>
                    <span className="text-[2rem] text-black font-bold">
                      Hours
                    </span>
                  </div>
                  <span className="text-[7rem] p-[0.2rem] text-black">:</span>
                  <div className="flex flex-col text-center">
                    <span className="text-[7rem] text-red-700">{minutes}</span>
                    <span className="text-[2rem] text-black font-bold">
                      Minutes
                    </span>
                  </div>
                  <span className="text-[7rem] p-[0.2rem] text-black">:</span>
                  <div className="flex flex-col text-center">
                    <span className=" text-[7rem] text-red-700">{seconds}</span>
                    <span className=" text-[2rem] text-black font-bold">
                      Seconds
                    </span>
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
