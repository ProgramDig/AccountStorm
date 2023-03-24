import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";


const Chart = () => {
  const [count, setCount] = useState<number>(2);
  const data = [
    { name: "Сесія А", uv: 0, pv: 2400, amt: 2400 },
    { name: "Сесія Б", uv: 3, pv: 2400, amt: 2400 },
    { name: "Сесія В", uv: 7, pv: 2400, amt: 2400 },
    { name: "Сесія Г", uv: 4, pv: 2400, amt: 2400 },
    { name: "Сесія Д", uv: 3, pv: 2400, amt: 2400 },
    { name: "Сесія Е", uv: 9, pv: 2400, amt: 2400 },
    { name: "Сесія Є", uv: 0, pv: 2400, amt: 2400 },
    { name: "Сесія Ж", uv: count, pv: 2400, amt: 2400 },
  ];
  useEffect(() => {
    if (count === 2) {
      if (localStorage.getItem("count")) {
        // @ts-ignore
        setCount(Number.parseInt(localStorage.getItem("count")));
      }
    }
    setCount(prevState => prevState + 1);
    localStorage.setItem("count", count.toString());
  }, []);

  return (
    <LineChart width={950} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#E1E1E1" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;