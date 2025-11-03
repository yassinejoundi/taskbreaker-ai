"use client"
import { useState } from "react"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { Sparkles, ChevronDown, ChevronRight, Trash } from "lucide-react"
import { useTaskStore } from "@/store/useTaskStore"

export function TaskItem({
  taskId,
  depth = 0,
}: {
  taskId: string
  depth?: number
}) {
  const { breakDownTask, toggleComplete, updateTask, getTaskById, deleteTask } =
    useTaskStore()
  const [isBreakingDown, setIsBreakingDown] = useState(false)

  const task = getTaskById(taskId)
  if (!task) return null

  const handleBreakdown = async (id: string) => {
    setIsBreakingDown(true)
    try {
      await breakDownTask(id)
    } catch (error) {
      console.error("Failed to break down task:", error)
    } finally {
      setIsBreakingDown(false)
    }
  }

  const toggleExpand = () => {
    updateTask(task.id, { isExpanded: !task.isExpanded })
  }

  const hasSubtasks = task.subtasks && task.subtasks.length > 0

  return (
    <div className="w-full">
      <div
        className={`
          flex flex-col sm:flex-row sm:items-center sm:justify-between
          p-3 rounded-lg gap-2 sm:gap-0
          transition-all duration-200
          ${
            depth === 0
              ? "bg-white border-2 border-slate-200 shadow-sm my-3"
              : "bg-slate-50 border border-slate-200 my-2"
          }
          ${task.completed ? "opacity-60" : ""}
          hover:shadow-md
        `}
      >
        {/* LEFT SECTION: main content */}
        <div className="flex items-center gap-2 flex-1 min-w-0 overflow-hidden">
          {hasSubtasks && (
            <button
              onClick={toggleExpand}
              className="hover:bg-slate-200 rounded p-1 transition-colors shrink-0"
              aria-label={
                task.isExpanded ? "Collapse subtasks" : "Expand subtasks"
              }
            >
              {task.isExpanded ? (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-600" />
              )}
            </button>
          )}

          <Checkbox
            checked={task.completed}
            onCheckedChange={() => toggleComplete(task.id)}
            className="shrink-0 border border-black"
          />

          <span
            className={`
    text-sm sm:text-base flex-1 min-w-0 wrap-break-words
    ${
      task.completed
        ? "line-through text-slate-500"
        : depth === 0
        ? "text-slate-900 font-medium"
        : "text-slate-700"
    }
    sm:truncate
  `}
          >
            {task.title}
          </span>

          {hasSubtasks && (
            <span className="hidden sm:inline text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full shrink-0">
              {task.subtasks!.length}{" "}
              {task.subtasks!.length === 1 ? "step" : "steps"}
            </span>
          )}
        </div>

        {/* RIGHT SECTION: buttons */}
        <div className="flex justify-end sm:justify-normal items-center gap-2 sm:ml-3 w-full sm:w-auto">
          <Button
            onClick={() => handleBreakdown(task.id)}
            disabled={isBreakingDown || hasSubtasks || task.completed}
            className={`
              flex-1 sm:flex-none text-sm
              ${
                hasSubtasks
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-black hover:bg-slate-800 text-white"
              }
            `}
            size="sm"
          >
            <Sparkles className="w-4 h-4 mr-2 sm:inline" />
            {isBreakingDown
              ? "Breaking..."
              : hasSubtasks
              ? "Done"
              : "Breakdown"}
          </Button>

          <Button
            onClick={() => deleteTask(task.id)}
            variant="ghost"
            size="icon"
            className="bg-red-100 text-red-500 hover:text-red-700 hover:bg-red-200 shrink-0"
            aria-label="Delete task"
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Render subtasks */}
      {hasSubtasks && task.isExpanded && (
        <div className="ml-3 sm:ml-6 mt-2 pl-3 sm:pl-4 border-l-2 border-slate-200">
          {task.subtasks!.map((subtask) => (
            <TaskItem key={subtask.id} taskId={subtask.id} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
