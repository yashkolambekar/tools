import { useState } from "react";
import PerTimeCard from "./PerTimeCard";

const MainConversionApp = ({ rate, setCurr }: { rate: number, setCurr: Function }) => {
  const [usd, setUsd] = useState<number | "">(1);

  const times = [
    {
      title: "hour",
      hours: 1,
    },
    {
      title: "day",
      hours: 24,
    },
    {
      title: "week",
      hours: 168,
    },
    {
      title: "month",
      hours: 730,
    },
    {
      title: "year",
      hours: 8760,
    },
  ];

  return (
    <>
      <div className="mt-6">
        <div className="text-[1.3em]">
          <input
            value={usd}
            onChange={(e) => {
              if (e.target.value === "") {
                setUsd("");
                return;
              }
              setUsd(Number(e.target.value));
            }}
            type="number"
            className="bg-[rgb(25,25,25)] p-2 w-[5em] mr-2 text-center rounded-md"
          />
          <select onChange={(e) => {
              setCurr(e.target.value);
          }}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
           / hour
        </div>
      </div>
      <div>
            {
                times.map((time) => {
                    return (
                        <PerTimeCard key={time.title} hours={time.hours} time={usd as number} rate={rate} title={time.title} />
                    )
                })
            }
      </div>
    </>
  );
};

export default MainConversionApp;
