import { useEffect, useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { globalStats } from "../../services/getGlobalStats";
import { numberWithCommas } from "../../utils/numberWithCommas";
import Loading from "../Loading/Loading";
const OverViewSection = () => {
  const [globalStatsMarket, setGlobalStatsMarket] = useState(null);

  function fetchGlobalStats() {
    globalStats()
      .then((res) => setGlobalStatsMarket(res.data.data))
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchGlobalStats();
    const handle = setInterval(() => fetchGlobalStats(), 30000);
    return () => clearInterval(handle);
  }, []);
  return (
    <>
      <div className="w-full flex items-center justify-between  p-2 xl:p-4">
        <h1 className="text-lg lg:text-base font-semibold text-slate-800">
          Overview
        </h1>
        <span className="text-2xl lg:text-lg text-slate-800 cursor-pointer">
          <IoEllipsisVertical />
        </span>
      </div>
      <div className="grid grid-cols-12 items-center gap-2 pt-4 h-auto lg:h-[300px]  lg:overflow-auto ">
        {globalStatsMarket ? (
          <>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">total</h1>
              <span className="py-2 w-32 lg:w-36 xl:w-32 2xl:w-36  font-semibold text-sm px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                {globalStatsMarket.totalCoins}
              </span>
              <h1 className="text-slate-800  text-lg lg:text-sm xl:text-lg font-semibold">
                Coins
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">total</h1>
              <span className="py-2 w-32 lg:w-36 xl:w-32 2xl:w-36  font-semibold text-sm px-4 bg-yellow-700  shadow-lg  text-center rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.totalMarkets)}
              </span>
              <h1 className="text-slate-800 text-lg lg:text-sm xl:text-lg font-semibold">
                Markets
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">total</h1>
              <span className="py-2 w-32 lg:w-36 xl:w-32 2xl:w-36  font-semibold text-sm  bg-indigo-500  shadow-lg  text-center rounded-lg text-white">
                {globalStatsMarket.totalExchanges}
              </span>
              <h1 className="text-slate-800 text-lg lg:text-sm xl:text-lg font-semibold">
                Exchanges
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">total</h1>
              <span className="py-2 w-32 lg:w-36 xl:w-32 2xl:w-36   font-semibold text-xs flex justify-end px-4 bg-indigo-500  shadow-lg  rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.totalMarketCap)}
              </span>
              <h1 className="text-slate-800 text-lg lg:text-sm xl:text-lg font-semibold">
                MarketCap
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">total</h1>
              <span className="py-2 w-32 flex justify-center lg:w-36 xl:w-32 2xl:w-36  font-semibold text-sm px-4 bg-blue-500  shadow-lg  text-center rounded-lg text-white">
                ${numberWithCommas(globalStatsMarket.total24hVolume)}
              </span>
              <h1 className="text-slate-800 text-lg lg:text-sm xl:text-lg font-semibold">
                24hVolume
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-12 mx-auto xl:col-span-6 2xl:col-span-4 p-2 bg-blue-50 shadow-lg shadow-blue-200 rounded-xl border flex flex-col gap-y-4 items-center">
              <h1 className="text-slate-500 text-sm">btc</h1>
              <span className="py-2 w-32 lg:w-36 xl:w-32 2xl:w-36  font-semibold px-4 bg-yellow-700  shadow-lg  text-center rounded-lg text-white">
                $
                {numberWithCommas(
                  Math.round(globalStatsMarket.btcDominance * 100) / 100
                )}
              </span>
              <h1 className="text-slate-800 text-lg lg:text-sm xl:text-lg font-semibold">
                Dominance
              </h1>
            </div>
          </>
        ) : (
          <div className="justify-center flex"><Loading/></div>
        )}
      </div>
      <div className="pt-4 flex flex-col ">
        <h1 className="text-lg lg:text-base font-semibold text-slate-800">
          Best Coin Today
        </h1>
        <div className="flex flex-col gap-y-4">
          {globalStatsMarket ? (
            globalStatsMarket.bestCoins.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-4 w-full flex justify-between items-center border-b "
                >
                  <div className="flex items-center gap-x-2">
                    <div className="w-8 md:w-10 lg:w-6">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col text-sm md:text-base lg:text-sm">
                      <span className="text-slate-800 font-semibold">
                        Buy {item.name}
                      </span>
                      <span className="text-slate-400 text-xs md:text-sm lg:text-xs">
                        Today{" "}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-1 px-1 rounded-md text-xs md:text-sm md:py-1 md:px-4 lg:px-1 lg:text-xs lg:rounded-md md:rounded-xl text-white bg-indigo-800 ring ring-indigo-800 hover:ring-offset-2 hover:ring-indigo-800 transition-all ease-in-out duration-500"
                  >
                    Buy
                  </button>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center"><Loading/></div>
          )}
        </div>
        <h1 className="text-lg lg:text-base font-semibold text-slate-800 pt-6">
          New Coin Today
        </h1>
        <div className="flex flex-col gap-y-4">
          {globalStatsMarket ? (
            globalStatsMarket.newestCoins.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-4 w-full flex justify-between items-center border-b "
                >
                  <div className="flex items-center gap-x-2">
                    <div className="w-8 lg:w-6">
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col text-sm md:text-base lg:text-sm ">
                      <span className="text-slate-800 font-semibold">
                        Buy {item.name}
                      </span>
                      <span className="text-slate-400 text-xs md:text-sm lg:text-xs">
                        Today{" "}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-1 px-1 text-xs md:text-sm rounded-md md:py-1 md:px-4 lg:px-2 lg:rounded-md lg:text-xs md:rounded-xl text-white bg-amber-700  ring ring-amber-700 hover:ring-offset-2 hover:ring-amber-700 transition-all ease-in-out duration-500"
                  >
                    History
                  </button>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center"><Loading/></div>
          )}
        </div>
      </div>
    </>
  );
};

export default OverViewSection;
