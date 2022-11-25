import { useEffect, useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { getCoinPrice } from "../../services/getCoinPrice";

import { globalStats } from "../../services/getGlobalStats";
import { numberWithCommas } from "../../utils/numberWithCommas";
const OverViewSection = () => {
  const [globalStatsMarket, setGlobalStatsMarket] = useState(null);
  const [getCoinPriceAction, setGetCoinPriceAction] = useState("");
  function fetchGlobalStats() {
    globalStats()
      .then((res) => setGlobalStatsMarket(res.data.data))
      .catch((err) => console.log(err.message));
  }
  function getTransCoinPrice(uuid) {
    getCoinPrice(uuid)
      .then((res) => setGetCoinPriceAction(res.data.data.price))
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchGlobalStats();
    const handle = setInterval(() => fetchGlobalStats(), 30000);
    return () => clearInterval(handle);
  }, []);
  return (
    <>
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="text-lg font-semibold text-slate-800">Overview</h1>
        <span className="text-2xl text-slate-800 cursor-pointer">
          <IoEllipsisVertical />
        </span>
      </div>
      <div className="grid grid-cols-12 items-center gap-4 pt-4">
        {globalStatsMarket ? (
          <>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                totalCoins
              </h1>
              <span className="py-2 w-32 font-semibold text-sm px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                {globalStatsMarket.totalCoins}
              </span>
            </div>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                totalMarkets
              </h1>
              <span className="py-2 w-32 font-semibold text-sm px-4 bg-yellow-700  shadow-lg  text-center rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.totalMarkets)}
              </span>
            </div>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                totalExchanges
              </h1>
              <span className="py-2 w-32 font-semibold text-sm  bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                {globalStatsMarket.totalExchanges}
              </span>
            </div>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                totalMarketCap
              </h1>
              <span className="py-2 w-32 font-semibold text-sm px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.totalMarketCap)}
              </span>
            </div>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                total24hVolume
              </h1>
              <span className="py-2 w-32 font-semibold text-sm px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.total24hVolume)}
              </span>
            </div>
            <div className="col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-800 text-lg font-semibold">
                btcDominance
              </h1>
              <span className="py-2 w-32 font-semibold px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                $
                {numberWithCommas(
                  Math.round(globalStatsMarket.btcDominance * 100) / 100
                )}
              </span>
            </div>
          </>
        ) : (
          <div className="text-center">Loading ...</div>
        )}
      </div>
      <div className="pt-10 flex flex-col ">
        <h1 className="text-lg font-semibold text-slate-800">
          Best Coin Today
        </h1>
        <div className="flex flex-col gap-y-4">
          {globalStatsMarket ? (
            globalStatsMarket.bestCoins.map((item , i) => {
              return (
                <div key={i} className="py-2 px-4 w-full flex justify-between items-center border-b ">
                  <div className="flex items-center gap-x-2">
                    <div className="w-10">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-slate-800 font-semibold">
                        Buy {item.name}
                      </span>
                      <span className="text-slate-400 text-sm">Today </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-1 px-4 rounded-xl text-white bg-indigo-800 ring ring-indigo-800 hover:ring-offset-2 hover:ring-indigo-800 transition-all ease-in-out duration-500"
                  >
                    Buy
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center">Loading</div>
          )}
        </div>
        <h1 className="text-lg font-semibold text-slate-800 pt-6">New Coin Today</h1>
        <div className="flex flex-col gap-y-4">
          {globalStatsMarket ? (
            globalStatsMarket.newestCoins.map((item , i) => {
              return (
                <div key={i} className="py-2 px-4 w-full flex justify-between items-center border-b ">
                  <div className="flex items-center gap-x-2">
                    <div className="w-8">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-slate-800 font-semibold">
                        Buy {item.name}
                      </span>
                      <span className="text-slate-400 text-sm">Today </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-1 px-4 rounded-xl text-white bg-amber-700 text-sm ring ring-amber-700 hover:ring-offset-2 hover:ring-amber-700 transition-all ease-in-out duration-500"
                  >
                    History
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center">Loading</div>
          )}
        </div>
      </div>
    </>
  );
};

export default OverViewSection;
