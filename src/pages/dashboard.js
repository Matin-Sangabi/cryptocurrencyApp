import { useState } from "react";
import Layout from "../layout/layout";
import MyCoins from "../components/MyCoins/MyCoins";
import ChartSection from "../components/chart/chartSection";
import MarketValueSection from "../components/marketValue/marketValueList";
import OverViewSection from "../components/overView/overViewSectiom";
const DashboardPage = () => {
  const [coinIdSelect , setCoinIdSelect] = useState("Qwsogvtv82FCd");
  return (
    <Layout>
      <section className="grid grid-cols-12 md:gap-4 xl:gap-4">
        <div className="p-2 col-span-12 lg:col-span-9 xl:col-span-8 flex flex-col gap-4">
          <MyCoins />
          <ChartSection coinSelectTrade={coinIdSelect}/>
          <MarketValueSection onSelectCoin={setCoinIdSelect}/>
        </div>
        <div className="p-2 col-span-12 lg:col-span-3 xl:col-span-4 bg-blue-50 shadow-md shadow-blue-200 rounded-2xl my-2">
          <OverViewSection/>
        </div>
      </section>
    </Layout>
  );
};

export default DashboardPage;
