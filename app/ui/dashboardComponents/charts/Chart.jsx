"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";
const data = [
  {
    name: "Mon",
    visits: "3000",
    clicks: "1230",
  },
  {
    name: "Tue",
    visits: "1000",
    clicks: "1400",
  },
  {
    name: "Wed",
    visits: "3400",
    clicks: "1030",
  },
  {
    name: "Thu",
    visits: "3290",
    clicks: "1200",
  },
  {
    name: "Fri",
    visits: "1000",
    clicks: "700",
  },
  {
    name: "Sat",
    visits: "5000",
    clicks: "3230",
  },
  {
    name: "Sun",
    visits: "6000",
    clicks: "4230",
  },
];
function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="teal" />
          <Line type="monotone" dataKey="clicks" stroke="crimson" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
