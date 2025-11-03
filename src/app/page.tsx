"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/Hero"
import { TaskItem } from "@/components/TaskItem"

import { useTaskStore } from "@/store/useTaskStore"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const { tasks } = useTaskStore()

  return (
    <div className="bg-gray-950 justify-center items-center min-h-screen">
      <main className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24">
        <Hero />

        {tasks.length !== 0 && (
          <div className="px-6">
            <Card className="mb-8 border-border/50 bg-card backdrop-blur">
              <CardHeader>
                <CardTitle>Tasks List</CardTitle>
              </CardHeader>
              <CardContent className="py-3 px-6">
                {tasks.map((task) => (
                  <TaskItem key={task.id} taskId={task.id} />
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {tasks.length === 0 && (
          <div className="text-center pt-12 pb-6">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <p className="text-slate-200 text-lg">
              No tasks yet. Add your first task above!
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
