import { Header } from "@/components/Header";
import { KPICard } from "@/components/KPICard";
import { DataTable } from "@/components/DataTable";
import { ChartSection } from "@/components/ChartSection";
import { kpiData, tableData, savingsData } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-slate-700">
          <h1 className="text-2xl font-semibold">
            PHARMORIS Intelligence Dashboard
          </h1>
          <p className="text-sm">
            Real-time clinical supplychain insights with stress-tested
            monitoring.
          </p>
        </div>

        <section aria-label="Analytics KPI cards">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpiData.map((metric) => (
              <KPICard key={metric.id} data={metric} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2" aria-live="polite" aria-atomic="true">
            <ChartSection data={savingsData} />
          </div>
          <div className="xl:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold">Latest Alerts</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="rounded-lg bg-rose-50 p-3">
                  Metformin stock depletion expected in 4h
                </li>
                <li className="rounded-lg bg-amber-50 p-3">
                  Amoxicillin reorder recommended at 65% capacity
                </li>
                <li className="rounded-lg bg-emerald-50 p-3">
                  Paracetamol trending up 2% due to demand
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Medicine Supply Data</h2>
          <DataTable data={tableData} />
        </div>
      </div>
    </main>
  );
}
