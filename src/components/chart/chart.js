import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GetCoinHistory } from "../../services/getCoinHistory";

const Chart = ({timeChart}) => {
  const [data, setData] = useState([]);
  const [sortData , setSortData] = useState([]);

  const fetchHistoryCoin = (time = "1y") => {
    GetCoinHistory("Qwsogvtv82FCd", time)
      .then((res) => {
        const history = res.data.data.history;
        setData([...history]);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchHistoryCoin(timeChart);
  }, [timeChart]);
  useEffect(() => {
    const sort = data.sort((a, b) => {
      return new Date(a.timestamp) > new Date(b.timestamp) ? 1 : -1;
    });
    setSortData(sort);
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height={timeChart === '5y' ? '65%' : '100%'}>
      <AreaChart
        width={300}
        height={200}
        data={sortData}
        margin={{
          top: timeChart === '5y' ? 230 :timeChart === '1y' ?0 : 50,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="timestamp" />
        {/* <YAxis /> */}
        <Tooltip />
        <Area
          type="monotoneX"
          dataKey="price"
          aria-label="$"
          strokeWidth="3"
          stroke="#1e40af"
          fill="#bfdbfe"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
