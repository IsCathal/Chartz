import Image from "next/image";
import { RadialChartz } from '@/components/charts/radiacl-chart'; // Adjust the import path as necessary


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RadialChartz />
    </main>
  );
}
