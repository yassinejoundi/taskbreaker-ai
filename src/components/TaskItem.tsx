import { Card, CardContent } from "./ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
interface Task {
  id: string
  title: string
  completed: boolean
  isExpanded: boolean
}

interface TaskProps {
  task: Task
}
export function TaskItem({ task }: TaskProps) {
  return (
    <Card className="mb-8 border-border/50 bg-card backdrop-blur">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{task.title}</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
