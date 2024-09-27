"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  items: [];
}

export function MessagesOverview({ items }: OverviewProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={items} title="Messages">
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Line type="monotone" dataKey="total" stroke="#71717a" />
      </LineChart>
    </ResponsiveContainer>
  );
}
