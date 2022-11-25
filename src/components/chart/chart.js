import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { GetCoinHistory } from "../../services/getCoinHistory";

const Chart = ({ coinId, timeChart }) => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const fetchHistoryCoin = (coinId, time = "1y") => {
    GetCoinHistory(coinId, time)
      .then((res) => {
        const history = res.data.data.history;
        setData([...history]);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchHistoryCoin(coinId, timeChart);
    const handle = setInterval(
      () => fetchHistoryCoin(coinId, timeChart),
      10000
    );
    return () => clearInterval(handle);
  }, [coinId, timeChart]);
  useEffect(() => {
    //*unmuted the state
    const sort = [...data];
    sort.reverse();
    const sorted = sort.map((item) => {
      return {
        ...item,
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        price: Math.round(item.price * 1000) / 1000,
      };
    });
    setSortData(sorted);
  }, [data]);
  return (
    <ResponsiveContainer
      width="100%"
      height={timeChart === "5y" ? "100%" : "80%"}
    >
      <AreaChart
        width={300}
        height={300}
        data={sortData}
        margin={{
          top: timeChart === "5y" ? 0 : timeChart === "1y" ? 0 : 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="timestamp" />
        {/* <YAxis /> */}
        <Tooltip separator=": $" cursor={{ stroke: "none", strokeWidth: 2 }} />
        <Area
          type="monotoneX"
          dataKey="price"
          strokeWidth="3"
          stroke="#1e40af"
          fill="#d5ecfb"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
