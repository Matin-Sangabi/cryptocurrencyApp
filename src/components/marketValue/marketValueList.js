const MarketValueSection = () => {
  return (
    <div className="w-full bg-blue-50 shadow-md shadow-blue-200 h-[440px] overflow-auto rounded-xl p-6 flex flex-col">
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-xl text-slate-800 font-semibold ">Market Value</h1>
        <select className="py-1 text-sm px-6 ring ring-slate-500 text-slate-600 rounded-lg outline-none border-none">
          <option value={""}>popular</option>
          <option value={""}>All</option>
          <option value={""}>Rank</option>
        </select>
      </div>
      <div className="w-full grid grid-cols-12 py-2 px-4 bg-blue-100 rounded-xl text-slate-500 mb-2">
        <span className="col-span-4">Name</span>
        <span className="col-span-2 text-center">Assets Price</span>
        <span className="col-span-2 text-center">Changes</span>
        <span className="col-span-2 text-center">Rank</span>
        <span className="col-span-2 text-center">Trade</span>
      </div>
      <div className="w-full grid grid-cols-12 py-2 px-4 bg-blue-50 rounded-xl text-slate-500 gap-y-4 ">
        <span className="col-span-4">Name</span>
        <span className="col-span-2 text-center">Assets Price</span>
        <span className="col-span-2 text-center">Changes</span>
        <span className="col-span-2 text-center">Rank</span>
        <span className="col-span-2 text-center">Trade</span>
        <span className="col-span-4">Name</span>
        <span className="col-span-2 text-center">Assets Price</span>
        <span className="col-span-2 text-center">Changes</span>
        <span className="col-span-2 text-center">Rank</span>
        <span className="col-span-2 text-center">Trade</span>
      </div>
    </div>
  );
};

export default MarketValueSection;
