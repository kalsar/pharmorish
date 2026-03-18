import React from "react";
import { KPIData, DrugData, ChartDataPoint } from "@/types";
import { Hospital, Pill, TrendingUp, AlertTriangle } from "lucide-react";

export const kpiData: KPIData[] = [
  {
    id: "pharmacies",
    title: "Active Pharmacies",
    value: "128",
    icon: React.createElement(Hospital, {
      className: "h-5 w-5 text-sky-500",
    }),
    delta: "+7 this week",
  },
  {
    id: "drugs",
    title: "Drugs Monitored",
    value: "12,450",
    icon: React.createElement(Pill, {
      className: "h-5 w-5 text-emerald-500",
    }),
    delta: "+210 this week",
  },
  {
    id: "savings",
    title: "Cost Savings Identified",
    value: "£3.2M",
    icon: React.createElement(TrendingUp, {
      className: "h-5 w-5 text-lime-500",
    }),
    delta: "+12% QoQ",
  },
  {
    id: "alerts",
    title: "Stock Alerts Today",
    value: "47",
    icon: React.createElement(AlertTriangle, {
      className: "h-5 w-5 text-amber-500",
    }),
    delta: "-3 today",
  },
];

export const tableData: DrugData[] = [
  {
    id: "1",
    drugName: "Paracetamol",
    manufacturer: "Pfizer",
    stockStatus: "In Stock",
    priceChange: "+2%",
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    drugName: "Amoxicillin",
    manufacturer: "GSK",
    stockStatus: "Low Stock",
    priceChange: "-1.5%",
    lastUpdated: "5 hours ago",
  },
  {
    id: "3",
    drugName: "Ibuprofen",
    manufacturer: "Bayer",
    stockStatus: "In Stock",
    priceChange: "+0.5%",
    lastUpdated: "1 day ago",
  },
  {
    id: "4",
    drugName: "Metformin",
    manufacturer: "Novartis",
    stockStatus: "Out of Stock",
    priceChange: "+3%",
    lastUpdated: "30 minutes ago",
  },
];

export const savingsData: ChartDataPoint[] = [
  { month: "Jan", savings: 120000 },
  { month: "Feb", savings: 220000 },
  { month: "Mar", savings: 350000 },
  { month: "Apr", savings: 480000 },
  { month: "May", savings: 620000 },
  { month: "Jun", savings: 900000 },
];
