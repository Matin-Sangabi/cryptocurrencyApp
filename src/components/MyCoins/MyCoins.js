import { useEffect, useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";
import { getAllCoins } from "../../services/getAllPrice";

import { numberWithCommas } from "../../utils/numberWithCommas";
import Loading from "../Loading/Loading";
const MyCoins = () => {
  const [coins, setCoins] = useState(null);
  function fetchTwiceCoin() {
    getAllCoins(2)
      .then((res) => setCoins(res.data.data.coins))
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchTwiceCoin();
    const handle = setInterval(() => fetchTwiceCoin(), 10000);
    return () => clearInterval(handle);
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-6">
      {coins ? (
        coins.map((item, i) => {
          return (
            <div key={i} className={`shadow-md shadow-blue-200 rounded-xl p-2 flex bg-blue-50  gap-2 flex-1 w-full`}>
              <div className="w-10 md:w-14 md:h-14 xl:w-16 xl:h-16 flex justify-center items-center  rounded-md">
                <img src={item.iconUrl} alt={item.name} />
              </div>
              <div className="flex flex-col justify-between h-auto w-full">
                <span className="text-slate-400 ">{item.symbol}</span>
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-gray-800 font-bold md:text-lg xl:text-xl">
                    ${numberWithCommas(Math.round(item.price * 100) / 100)}
                  </h1>
                  <span
                    className={`flex text-sm items-center text-blue-500 gap-2 `}
                  >
                    <span
                      className={`${
                        Number(item.change) > 0
                          ? "text-green-500"
                          : "text-red-600 rotate-180"
                      }`}
                    >
                      <IoCaretUpOutline />
                    </span>
                    <span>( {item.change} % )</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex  justify-center"><Loading/></div>
      )}
    </div>
  );
};

export default MyCoins;