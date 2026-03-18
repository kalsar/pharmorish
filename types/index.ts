import { ReactNode } from "react";

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface KPIData {
  id: string;
  title: string;
  value: string;
  icon?: ReactNode; // React icon node (lucide-react/component)
  delta?: string;
}

export interface DrugData {
  id: string;
  drugName: string;
  manufacturer: string;
  stockStatus: StockStatus;
  priceChange: string;
  lastUpdated: string;
}

export interface ChartDataPoint {
  month: string;
  savings: number;
}
