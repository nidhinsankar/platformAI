"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface OverviewProps {
  items: [];
}

const DATA = [
  { name: "2024-08-30", total: 0 },
  { name: "2024-08-31", total: 3 },
  { name: "2024-09-01", total: 5 },
  { name: "2024-09-02", total: 2 },
  { name: "2024-09-03", total: 4 },
  { name: "2024-09-04", total: 3 },
  { name: "2024-09-05", total: 6 },
  { name: "2024-09-06", total: 2 },
  { name: "2024-09-07", total: 3 },
  { name: "2024-09-08", total: 5 },
  { name: "2024-09-09", total: 6 },
  { name: "2024-09-10", total: 2 },
  { name: "2024-09-11", total: 7 },
  { name: "2024-09-12", total: 2 },
  { name: "2024-09-13", total: 3 },
  { name: "2024-09-14", total: 5 },
  { name: "2024-09-15", total: 3 },
  { name: "2024-09-16", total: 4 },
  { name: "2024-09-17", total: 8 },
  { name: "2024-09-18", total: 6 },
  { name: "2024-09-19", total: 2 },
  { name: "2024-09-20", total: 4 },
  { name: "2024-09-21", total: 5 },
  { name: "2024-09-22", total: 2 },
  { name: "2024-09-23", total: 1 },
  { name: "2024-09-24", total: 3 },
  { name: "2024-09-25", total: 2 },
  { name: "2024-09-26", total: 5 },
  { name: "2024-09-27", total: 2 },
  { name: "2024-09-28", total: 2 },
];

export function MessagesOverview({ items }: OverviewProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={DATA}
        margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff8300" stopOpacity={0.8} />{" "}
            {/* Orange */}
            <stop offset="95%" stopColor="#ff8300" stopOpacity={0} />{" "}
            {/* Lighter orange with transparency */}
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#FF8343" tick={{ fill: "black" }} />
        <YAxis stroke="#FF8343" tick={{ fill: "black" }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          strokeWidth={3}
          fill="url(#colorValue)"
          stroke="#FF8343" // Orange stroke color
          // fill="rgba(243, 125, 49, 0.3)" // Adjusting fill color transparency
        />
        {/* <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          strokeWidth={2}
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}

{
  /* <LineChart data={DATA} title="Messages">
<XAxis
  dataKey="name"
  stroke="#888888"
  fontSize={12}
  // tickLine={false}
  // axisLine={false}
/>
<YAxis
  stroke="#888888"
  fontSize={12}
  // tickLine={false}
  // axisLine={false}
  tickFormatter={(value) => `${value}`}
/>
<Tooltip />
<Legend />
<Line type="monotone" dataKey="total" stroke="#71717a" />
</LineChart> */
}
