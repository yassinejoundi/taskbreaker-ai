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

  if (!task) {
    return null
  }

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
          flex items-center justify-between p-3 rounded-lg
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
        <div className="flex items-center gap-2 flex-1 min-w-0">
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
            className="shrink-0"
          />

          <span
            className={`
              text-base flex-1 min-w-0
              ${
                task.completed
                  ? "line-through text-slate-500"
                  : depth === 0
                  ? "text-slate-900 font-medium"
                  : "text-slate-700"
              }
            `}
          >
            {task.title}
          </span>

          {hasSubtasks && (
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full shrink-0">
              {task.subtasks!.length}{" "}
              {task.subtasks!.length === 1 ? "step" : "steps"}
            </span>
          )}
        </div>

        <Button
          onClick={() => handleBreakdown(task.id)}
          disabled={isBreakingDown || hasSubtasks || task.completed}
          className={`
            ml-3 shrink-0
            ${
              hasSubtasks
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-black hover:bg-slate-800"
            }
          `}
          size="sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {isBreakingDown ? "Breaking..." : hasSubtasks ? "Done" : "Breakdown"}
        </Button>

        <Button
          onClick={() => deleteTask(task.id)}
          variant="ghost"
          size="icon"
          className="ml-2 bg-red-100 text-red-500 hover:text-red-700 hover:bg-red-200"
          aria-label="Delete task"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      {/* Render subtasks with indentation */}
      {hasSubtasks && task.isExpanded && (
        <div className="ml-6 mt-2 pl-4 border-l-2 border-slate-200">
          {task.subtasks!.map((subtask) => (
            <TaskItem key={subtask.id} taskId={subtask.id} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
