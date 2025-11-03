import { create } from "zustand"

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TaskStore {
  tasks: Task[]
  addTask: (task: Task) => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (newTask: Task) =>
    set((state) => ({ tasks: [newTask, ...state.tasks] })),
}))
