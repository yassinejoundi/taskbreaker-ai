"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/Hero"
import { TaskItem } from "@/components/TaskItem"
import { useTaskStore } from "@/store/useTaskStore"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const { tasks } = useTaskStore()

  return (
    <div className="bg-linear-to-t from-sky-900 to-indigo-900 flex justify-center items-start min-h-screen">
      <main className="w-full max-w-5xl px-2 sm:px-6 md:px-10 py-12 md:py-20">
        {/* Hero Section */}
        <Hero />

        {/* Tasks Section */}
        {tasks.length > 0 ? (
          <section className="px-2 sm:px-4">
            <Card className="border border-slate-700/50 bg-white backdrop-blur-md shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="border-b border-slate-700/40">
                <CardTitle className="text-xl sm:text-2xl text-black font-semibold text-center sm:text-left">
                  Tasks List
                </CardTitle>
              </CardHeader>

              <CardContent className="px-3 sm:px-6 space-y-3 sm:space-y-4">
                {tasks.map((task) => (
                  <TaskItem key={task.id} taskId={task.id} />
                ))}
              </CardContent>
            </Card>
          </section>
        ) : (
          <section className="text-center pt-10 sm:pt-16 pb-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 shadow-md">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            </div>
            <p className="text-slate-200 text-base sm:text-lg max-w-sm mx-auto px-4">
              No tasks yet. Add your first task above!
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
