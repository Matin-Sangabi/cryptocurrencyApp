import {useEffect, useState } from "react";
import { getAllCoins } from "../../services/getAllPrice";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MarketValueSection = ({ onSelectCoin }) => {
  const [allCoins, setAllCoins] = useState(null);
  function fetchToGetAllCoins() {
    getAllCoins()
      .then((res) => setAllCoins(res.data.data.coins))
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchToGetAllCoins();
    setInterval(() => fetchToGetAllCoins(), 10000);
  }, []);
  return (
    <div className="w-full   bg-blue-50 shadow-md shadow-blue-200  rounded-xl p-6 flex flex-col">
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-xl text-slate-800 font-semibold ">Market Value</h1>
        <select className="py-1 text-sm px-6 ring ring-slate-500 text-slate-600 rounded-md outline-none border-none">
          <option value={""}>popular</option>
          <option value={""}>All</option>
          <option value={""}>Rank</option>
        </select>
      </div>
      <div className="w-full overflow-auto">
      <div className="md:w-full w-[600px] overflow-auto  grid grid-cols-12 py-2 px-4 bg-blue-100 rounded-xl text-slate-500 mb-2">
        <span className="col-span-4 md:col-span-3 xl:col-span-4">Name</span>
        <span className="col-span-2 md:col-span-3 xl:col-span-2 text-center">Assets Price</span>
        <span className="col-span-2 text-center">Changes</span>
        <span className="col-span-2 text-center">Volume</span>
        <span className="col-span-2 text-center">Trade</span>
      </div>
      <div className="w-[600px] md:w-full h-[290px]  overflow-auto flex flex-col gap-y-1">
        {allCoins ? (
          allCoins.map((item) => {
            return (
              <div
                key={item.rank}
                className="w-full grid grid-cols-12 items-center py-3 px-2  text-slate-500 mb-2 border-b-2 "
              >
                <div className="col-span-4 md:col-span-3 xl:col-span-4 flex items-center gap-x-2">
                  <div className="w-10 md:w-8 xl:w-10">
                    <img src={item.iconUrl} alt={item.name} />
                  </div>
                  <h1
                    className={`text-gray-800  font-semibold ${
                      item.name.length > 25 ? "text-xs" : "text-base md:text-sm xl:text-base"
                    }`}
                  >
                    {item.name}/{item.symbol}
                  </h1>
                </div>
                <span className="col-span-2 md:col-span-3 xl:col-span-2 text-center text-gray-800 font-semibold text-base md:text-sm xl:text-base">
                  $ {numberWithCommas(Math.round(item.price * 100) / 100)}
                </span>
                <div className="col-span-2 text-center flex items-center justify-center gap-x-2 md:text-sm xl:text-base ">
                  <span
                    className={`w-[18px] h-[18px] md:w-4 md:h-4  xl:w-[18px] xl:h-[18px]  rounded-full ${
                      item.change > 0 ? "bg-green-600" : "bg-red-600"
                    } text-slate-100 flex items-center justify-center `}
                  >
                    {item.change > 0 ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </span>
                  <h1
                    className={` font-semibold ${
                      item.change > 0 ? "text-green-700" : "text-red-600"
                    }`}
                  >
                    {item.change} %
                  </h1>
                </div>
                <span className="col-span-2 flex items-center justify-end text-xs xl:text-sm  text-gray-800 font-semibold ">
                  $ {numberWithCommas(Math.round(item.listedAt * 100) / 100)}
                </span>
                <span className="col-span-2 text-center flex items-center justify-center">
                  <button
                    type="button"
                    className=" py-1 px-4  md:px-3 xl:py-1 xl:px-6 text-center text-slate-100 bg-blue-800 rounded-xl hover:ring hover:ring-offset-2 hover:ring-blue-800 transition-all ease-in-out duration-500"
                    onClick={() => onSelectCoin(item.uuid)}
                  >
                    Trade
                  </button>
                </span>
              </div>
            );
          })
        ) : (
          <div className="text-center">Loading ...</div>
        )}
      </div>
      </div>
    </div>
  );
};

export default MarketValueSection;
