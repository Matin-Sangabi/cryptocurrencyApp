import { Buttons } from "../../utils/buttons";
const ChartSection = () => {
  return (
    <div className="bg-blue-50 p-2 w-full rounded-xl shadow-md shadow-blue-200 flex flex-col h-[450px]">
      <div className="w-full flex justify-between items-center p-4">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-slate-800 font-semibold text-lg">
            Poftfolio Balance
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold text-slate-700">4.54ETH $ </h1>
            <p className="text-xl text-slate-800">(+1.65%)</p>
            <p className="text-slate-500">Today</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          {Buttons.map((btn, i) => {
            return (
              <button
                key={i}
                type="button"
                className="border-none outline-none p-2 text-xl font-semibold focus:text-blue-500"
              >
                {btn.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
/**
 * <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            3h
          </button>
          <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            1d
          </button>
          <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            1w
          </button>
          <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            3m
          </button>
          <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            1y
          </button>
          <button
            type="button"
            className="border-none outline-none p-2 text-lg font-semibold"
          >
            3h
          </button>
 */
