import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "../styles/Analytics.css";

const data = [
  { month: "Jan", balance: 2000 },
  { month: "Feb", balance: 3500 },
  { month: "Mar", balance: 5000 },
  { month: "Apr", balance: 6000 },
  { month: "May", balance: 7500 },
  { month: "Jun", balance: 9000 }
];

function AnalyticsChart() {
  return (
    <div className="analytics-card">
      <h2>Balance Growth</h2>

      <div className="chart-wrapper">
        <ResponsiveContainer
          width="99%"
          height={350}
        >
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#06b6d4"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;