"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

import { Progress } from "@/components/ui/progress"

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const interval = 1000; // Update interval (1 second)
    const increment = (100 / totalDuration) * interval; // Increment per interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer); // Stop the timer when progress reaches 100%
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <Progress value={progress} />

        <p className="text-2xl text-center text-red-700">Please do not close the page or open any other apps as it will interfere with the installation!!!</p>
      </main>
    </div>
  );
}
