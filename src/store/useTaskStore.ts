import { create } from "zustand"

interface Task {
  id: string
  title: string
  completed: boolean
  isExpanded: boolean
  isSubtask?: boolean
  subtasks?: Task[]
  ancestors?: string[]
}

interface TaskStore {
  tasks: Task[]
  addTask: (task: Task) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  toggleComplete: (id: string) => void
  breakDownTask: (id: string) => Promise<void>
  getTaskById: (id: string) => Task | null
}

// Helper function to find a task recursively
const findTask = (taskList: Task[], targetId: string): Task | null => {
  for (const task of taskList) {
    if (task.id === targetId) return task
    if (task.subtasks) {
      const found = findTask(task.subtasks, targetId)
      if (found) return found
    }
  }
  return null
}

// Helper function to update a task recursively
const updateTaskRecursive = (
  taskList: Task[],
  targetId: string,
  updates: Partial<Task>
): Task[] => {
  return taskList.map((task) => {
    if (task.id === targetId) {
      return { ...task, ...updates }
    }
    if (task.subtasks && task.subtasks.length > 0) {
      return {
        ...task,
        subtasks: updateTaskRecursive(task.subtasks, targetId, updates),
      }
    }
    return task
  })
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  addTask: (newTask) => set((state) => ({ tasks: [newTask, ...state.tasks] })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: updateTaskRecursive(state.tasks, id, updates),
    })),

  toggleComplete: (id) =>
    set((state) => ({
      tasks: updateTaskRecursive(state.tasks, id, {
        completed: !findTask(state.tasks, id)?.completed,
      }),
    })),

  getTaskById: (id) => {
    const { tasks } = get()
    return findTask(tasks, id)
  },

  breakDownTask: async (id) => {
    const { tasks } = get()
    const task = findTask(tasks, id)
    if (!task) {
      console.error("Task not found:", id)
      return
    }

    console.log("Breaking down task:", task.title)

    try {
      const response = await fetch("https://goblin.tools/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Text: task.title,
          Spiciness: 2,
          Ancestors: task.ancestors || [],
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API Response:", data)

      // Create subtasks with proper ancestry
      const subtasks: Task[] = (data || []).map(
        (title: string, index: number) => ({
          id: `${task.id}-${index}`,
          title,
          completed: false,
          isExpanded: false,
          isSubtask: true,
          ancestors: [...(task.ancestors || []), task.title],
        })
      )

      console.log("Created subtasks:", subtasks)

      // Update the parent task with subtasks
      set((state) => {
        const updatedTasks = updateTaskRecursive(state.tasks, id, {
          subtasks,
          isExpanded: true,
        })
        console.log("Updated tasks:", updatedTasks)
        return { tasks: updatedTasks }
      })
    } catch (error) {
      console.error("Error breaking down task:", error)
      throw error
    }
  },
}))
