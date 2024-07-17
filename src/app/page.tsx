"use client"; // Add this at the top

import Image from "next/image";
import { RadialChartz } from '@/components/charts/radiacl-chart'; // Adjust the import path as necessary
import { AreaChartz } from '@/components/charts/area-chart'; // Adjust the import path as necessary
import { RadarChartz } from '@/components/charts/radar-chart'; // Adjust the import path as necessary
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentChart, setCurrentChart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChart((prevChart) => (prevChart + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderChart = () => {
    switch (currentChart) {
      case 0:
        return <RadarChartz />;
      case 1:
        return <AreaChartz />;
      case 2:
        return <RadialChartz />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderChart()}
    </main>
  );
}
