import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

import { useTaskStore } from "@/store/useTaskStore"

export function Hero() {
  const [inputText, setInputText] = useState("")

  const { addTask } = useTaskStore()
  const handleAddTask = () => {
    if (!inputText.trim()) return
    addTask({
      id: Date.now().toString(),
      title: inputText.trim(),
      completed: false,
      isExpanded: false,
      isSubtask: false,
    })

    setInputText("")
  }
  return (
    <header>
      <div className="mx-auto w-full max-w-5xl px-2 sm:px-4">
        <h1 className="mb-4 text-white text-center text-4xl font-bold md:text-6xl md:leading-tight">
          TaskBreaker AI
        </h1>
        <p className="mb-6 text-sm text-gray-200 text-center sm:text-xl ">
          Break down complex tasks into manageable steps
        </p>
        {/* Form */}
        <Card className="mb-4 border-border/50 bg-card backdrop-blur">
          <CardContent className="px-3">
            <div className="flex items-center p-1 relative rounded-md border border-solid border-black  w-full">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
                className="flex-1 h-9 w-full px-3 text-sm text-black placeholder:text-black focus:outline-none"
                placeholder="What to achieve?"
              />
              <Button
                onClick={handleAddTask}
                className="bg-black text-white px-6 py-2 font-semibold"
              >
                Add Task
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
