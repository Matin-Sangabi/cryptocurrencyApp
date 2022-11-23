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
        </div>
        <div className="p-2 col-span-4"></div>
      </section>
    </Layout>
  );
};

export default DashboardPage;
