import { useEffect, useState } from "react";
import ToolTitle from "../../components/ToolComponents/ToolTItle";
import { IToolInfo } from "../../types";
import { fetchRates } from "./logic";
import ConversionRateDisplay from "./ConversionRateDisplay";
import MainConversionApp from "./MainConversionApp/MainConversionApp";

const ServerRatesInINR = ({ data }: { data: IToolInfo }) => {
  const [rate, setRate] = useState<number>(0);
  useEffect(() => {
    fetchRates().then((res) => {
      setRate(res?.rate);
    });
  }, []);

  return (
    <>
      <ToolTitle data={data} />
      <ConversionRateDisplay rate={rate} />
      <MainConversionApp rate={rate} />
    </>
  );
};

export default ServerRatesInINR;
