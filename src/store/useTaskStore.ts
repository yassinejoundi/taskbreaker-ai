import { create } from "zustand"

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TaskStore {
  tasks: Task[]
}

export const useTaskStore = create<TaskStore>(() => ({
  tasks: [],
}))
