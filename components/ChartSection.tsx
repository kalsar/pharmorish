"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/types";

interface ChartSectionProps {
  data: ChartDataPoint[];
}

export function ChartSection({ data }: ChartSectionProps) {
  return (
    <motion.section
      id="insights"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-label="Cost Savings Over Time"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          Cost Savings Over Time
        </h2>
        <span className="text-xs font-medium text-slate-500">
          Trend from Jan to Jun
        </span>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 6, right: 16, bottom: 8, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#64748b"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                `£${((value as number) / 1000).toFixed(0)}k`
              }
            />
            <Tooltip
              formatter={(value) => {
                const amount =
                  typeof value === "number" ? value : Number(value) || 0;
                return [`£${amount.toLocaleString()}`, "Savings"];
              }}
            />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
