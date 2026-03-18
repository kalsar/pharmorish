"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { KPIData } from "@/types";

interface KPICardProps {
  data: KPIData;
}

function KPICardComponent({ data }: KPICardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-400"
      tabIndex={0}
      aria-label={`${data.title}: ${data.value}`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {data.title}
        </h3>
        {data.icon ? <span className="text-lg">{data.icon}</span> : null}
      </div>
      <p className="text-2xl font-semibold text-slate-900">{data.value}</p>
      {data.delta && (
        <p className="mt-1 text-sm text-slate-500">{data.delta}</p>
      )}
    </motion.article>
  );
}
export const KPICard = React.memo(KPICardComponent);
