"use client"

import { Hero } from "@/components/Hero"
export default function HomePage() {
  return (
    <div className="bg-gray-950 justify-center items-center">
      <main className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <Hero />
      </main>
    </div>
  )
}
