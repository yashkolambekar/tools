import { useEffect, useState } from "react";
import ToolTitle from "../../components/ToolComponents/ToolTItle";
import { IToolInfo } from "../../types";
import { fetchRates } from "./logic";
import ConversionRateDisplay from "./ConversionRateDisplay";
import MainConversionApp from "./MainConversionApp/MainConversionApp";

const ServerRatesInINR = ({ data }: { data: IToolInfo }) => {
  const [rate, setRate] = useState<number>(0);
  const [curr, setCurr] = useState<string>("USD");
  useEffect(() => {
    fetchRates(curr).then((res) => {
      setRate(res?.rate);
    });
  }, [curr]);

  return (
    <>
      <ToolTitle data={data} />
      <ConversionRateDisplay curr={curr} rate={rate} />
      <MainConversionApp setCurr={setCurr} rate={rate} />
    </>
  );
};

export default ServerRatesInINR;
