"use client";

import AverageUptimeKPI from "./components/AverageUptimeKPI";
import DevicesTable from "./components/DevicesTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Vantage Dashboard</h1>
      <AverageUptimeKPI />
      <DevicesTable />
    </main>
  );
}
