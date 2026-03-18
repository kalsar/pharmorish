"use client";

import { useMemo, useState } from "react";
import { DrugData, StockStatus } from "@/types";

interface DataTableProps {
  data: DrugData[];
}

type SortKey = keyof DrugData;

type SortDirection = "asc" | "desc";

const statusMap: Record<StockStatus, string> = {
  "In Stock": "bg-emerald-100 text-emerald-700",
  "Low Stock": "bg-amber-100 text-amber-800",
  "Out of Stock": "bg-rose-100 text-rose-700",
};

export function DataTable({ data }: DataTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("drugName");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const aVal = String(a[sortKey] ?? "").toLowerCase();
      const bVal = String(b[sortKey] ?? "").toLowerCase();
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortKey, sortDirection]);

  const onSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const arrow = (key: SortKey) => {
    if (sortKey !== key) return "";
    return sortDirection === "asc" ? "▲" : "▼";
  };

  return (
    <section id="supply" aria-label="Medicine supply data">
      <div className="overflow-x-auto rounded-2xl border border-slate-200  shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left md:min-w-full">
          <thead className="sticky top-0 bg-slate-50 text-slate-600">
            <tr>
              {[
                { key: "drugName", label: "Drug Name" },
                { key: "manufacturer", label: "Manufacturer" },
                { key: "stockStatus", label: "Stock Status" },
                { key: "priceChange", label: "Price Change" },
                { key: "lastUpdated", label: "Last Updated" },
              ].map((column) => (
                <th
                  key={column.key}
                  className="cursor-pointer whitespace-nowrap px-4 py-3 text-sm font-semibold"
                  onClick={() => onSort(column.key as SortKey)}
                  scope="col"
                  aria-sort={
                    sortKey === column.key
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span className="flex items-center gap-1">
                    <span>{column.label}</span>
                    <span className="text-xs text-slate-400">
                      {arrow(column.key as SortKey)}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <tr
                key={row.id}
                className="border-t border-slate-100 transition hover:bg-slate-50 focus-within:bg-slate-50"
                tabIndex={0}
              >
                <td className="px-4 py-3 text-sm text-slate-800">
                  {row.drugName}
                </td>
                <td className="px-4 py-3 text-sm text-slate-800">
                  {row.manufacturer}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusMap[row.stockStatus]}`}
                  >
                    {row.stockStatus}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-800">
                  {row.priceChange}
                </td>
                <td className="px-4 py-3 text-sm text-slate-800">
                  {row.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
