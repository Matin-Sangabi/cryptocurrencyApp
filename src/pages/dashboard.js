import Layout from "../layout/layout";
import MyCoins from "../components/MyCoins/MyCoins";
import ChartSection from "../components/chart/chartSection";

const DashboardPage = () => {
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-8">
        <div className="p-2 col-span-8 flex flex-col gap-8">
          <MyCoins />
          <ChartSection/>
          <div className="w-full bg-blue-50 shadow-md shadow-blue-200 h-[450px] overflow-auto rounded-xl p-6 flex flex-col gap-y-8">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-xl text-slate-800 font-semibold ">Market Value</h1>
              <select className="py-1 text-sm px-6 ring ring-slate-500 text-slate-600 rounded-lg outline-none border-none">
                <option value={""}>popular</option>
                <option value={""}>All</option>
                <option value={""}>Rank</option>
              </select>
            </div>
            <div className="w-full grid grid-cols-12 py-2 px-4 bg-blue-100 rounded-xl text-slate-500">
              <span className="col-span-4">Name</span>
              <span className="col-span-2 text-center">Assets Price</span>
              <span className="col-span-2 text-center">Changes</span>
              <span className="col-span-2 text-center">Rank</span>
              <span className="col-span-2 text-center">Trade</span>
            </div>
          </div>
        </div>
        <div className="p-2 col-span-4"></div>
      </section>
    </Layout>
  );
};

export default DashboardPage;
