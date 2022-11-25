import { Buttons } from "../../utils/buttons";
import { useEffect, useState } from "react";
import Chart from "./chart";
import { GetOneCoin } from "../../services/getCoin";
import { numberWithCommas } from "../../utils/numberWithCommas";
const ChartSection = ({ coinSelectTrade }) => {
  const [timeChart, setTimeChart] = useState("1y");
  const [CoinPrice, setCoinPrice] = useState();
  function fetchPriceCoin() {
    GetOneCoin(coinSelectTrade)
      .then((res) => setCoinPrice(res.data.data.coin))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchPriceCoin(coinSelectTrade);
    const handle = setInterval(() => fetchPriceCoin(coinSelectTrade), 10000);
    return () => clearInterval(handle);
  }, [coinSelectTrade]);

  if (CoinPrice) {
    return (
      <div className="bg-blue-50 p-2 w-full rounded-xl shadow-md shadow-blue-200 flex flex-col h-[300px]">
        <div className="w-full flex justify-between items-center p-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <h1 className="text-slate-800 font-semibold">
                Poftfolio Balance
              </h1>
              <div className="w-6">
                <img src={CoinPrice.iconUrl} alt={CoinPrice.name} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-700">
                {numberWithCommas(Math.round(CoinPrice.price * 100) / 100)} ${" "}
              </h1>
              <p
                className={`${
                  Number(CoinPrice.change) > 0
                    ? "text-slate-200"
                    : "text-red-600 "
                }}`}
              >
                ({CoinPrice.change} %)
              </p>
              <p className="text-slate-500 text-sm">Today</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {Buttons.map((btn, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  value={timeChart}
                  className="border-none outline-none p-2 font-semibold focus:text-blue-500"
                  onClick={() => setTimeChart(btn.value)}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </div>
        <Chart coinId={coinSelectTrade} timeChart={timeChart} />
      </div>
    );
  }
};

export default ChartSection;
