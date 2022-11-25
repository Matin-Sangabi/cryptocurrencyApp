import { useEffect, useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";
import { getAllCoins } from "../../services/getAllPrice";

import { numberWithCommas } from "../../utils/numberWithCommas";
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
    <div className="flex items-center gap-6">
      {coins ? (
        coins.map((item, i) => {
          return (
            <div key={i} className={` shadow-md shadow-blue-200 rounded-xl p-2 flex   gap-2 flex-1 bg-blue-50 `}>
              <div className="w-16 h-14  rounded-md">
                <img src={item.iconUrl} alt={item.name} />
              </div>
              <div className="flex flex-col justify-between h-auto w-full">
                <span className="text-slate-400 ">{item.symbol}</span>
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-gray-800 font-bold text-xl">
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
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default MyCoins;

// if (BtcCoin && EthCoin) {
//   return (
//     <div className="flex items-center gap-6">

//       <div className="bg-blue-50 shadow-md shadow-blue-200 rounded-xl p-2 flex  gap-2  flex-1">
//         <div className="w-16 h-14  rounded-md">
//           <img src={BtcCoin.iconUrl} alt={BtcCoin.name} />
//         </div>
//         <div className="flex flex-col justify-between h-auto w-full">
//           <span className="text-slate-400">{BtcCoin.symbol}</span>
//           <div className="flex items-center justify-between w-full">
//             <h1 className="text-gray-800 font-bold text-xl">
//               ${numberWithCommas(Math.round(BtcCoin.price * 100) / 100)}
//             </h1>
//             <span className={`flex text-sm items-center text-blue-500 gap-2 `}>
//               <span
//                 className={`${
//                   BtcCoin.change > 0 ? "text-green-500" : "text-red-600 rotate-180"
//                 }`}
//               >
//                 <IoCaretUpOutline />
//               </span>
//               <span>( {BtcCoin.change} % )</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
