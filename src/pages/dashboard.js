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
        <div className="p-2 col-span-12 lg:col-span-9 xl:col-span-9 flex flex-col gap-4">
          <MyCoins />
          <ChartSection coinSelectTrade={coinIdSelect}/>
          <MarketValueSection onSelectCoin={setCoinIdSelect}/>
        </div>
        <OverViewSection/>

      </section>
    </Layout>
  );
};

export default DashboardPage;
