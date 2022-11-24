import { useState } from "react";
import Layout from "../layout/layout";
import MyCoins from "../components/MyCoins/MyCoins";
import ChartSection from "../components/chart/chartSection";
import MarketValueSection from "../components/marketValue/marketValueList";
const DashboardPage = () => {
  const [coinIdSelect , setCoinIdSelect] = useState("Qwsogvtv82FCd");
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-8">
        <div className="p-2 col-span-7 flex flex-col gap-6">
          <MyCoins />
          <ChartSection coinSelectTrade={coinIdSelect}/>
          <MarketValueSection onSelectCoin={setCoinIdSelect}/>
        </div>
        <div className="p-2 col-span-5"></div>
      </section>
    </Layout>
  );
};

export default DashboardPage;
