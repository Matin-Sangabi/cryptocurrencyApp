import { useEffect, useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";
import { GetOneCoin } from "../../services/getCoin";

const MyCoins = () => {
  const [BtcCoin, setBtcCoin] = useState(null);
  const [EthCoin, setEthCoin] = useState(null);
  const EthFetchData = () => {
    GetOneCoin("razxDUgYGNAdQ")
      .then((res) => setEthCoin(res.data.data.coin))
      .catch((err) => console.log(err.message));
  };
  const BtcFetchData = () => {
    GetOneCoin("Qwsogvtv82FCd")
      .then((res) => setBtcCoin(res.data.data.coin))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    EthFetchData();
    BtcFetchData();
    setInterval(() => {
      EthFetchData();
      BtcFetchData();
    }, 30000);
  }, []);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (BtcCoin && EthCoin) {
    return (
      <div className="flex items-center gap-4">
        <div className="bg-blue-50 shadow-md shadow-blue-200 rounded-xl p-4 flex  gap-2  flex-1">
          <div className="w-20 h-16  rounded-md">
            <img src={EthCoin.iconUrl} alt={EthCoin.name} />
          </div>
          <div className="flex flex-col justify-between h-auto w-full">
            <span className="text-slate-600">{EthCoin.symbol}</span>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-slate-900 font-bold text-xl">
                ${numberWithCommas(Math.round(EthCoin.price * 1000) / 1000)}
              </h1>
              <span
                className={`flex text-lg items-center gap-2 ${
                  EthCoin.price > 0 ? "text-green-800" : "text-red-600"
                }`}
              >
                <span>
                  <IoCaretUpOutline />
                </span>
                <span> {EthCoin.change} %</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 shadow-md shadow-blue-200 rounded-xl p-4 flex  gap-2  flex-1">
          <div className="w-20 h-16  rounded-md">
            <img src={BtcCoin.iconUrl} alt={BtcCoin.name} />
          </div>
          <div className="flex flex-col justify-between h-auto w-full">
            <span className="text-slate-600">{BtcCoin.symbol}</span>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-slate-900 font-bold text-xl">
                ${numberWithCommas(Math.round(BtcCoin.price * 1000) / 1000)}
              </h1>
              <span
                className={`flex text-lg items-center gap-2 ${
                  BtcCoin.price > 0 ? "text-green-800" : "text-red-600"
                }`}
              >
                <span>
                  <IoCaretUpOutline />
                </span>
                <span> {BtcCoin.change} %</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MyCoins;
/* *
 */
