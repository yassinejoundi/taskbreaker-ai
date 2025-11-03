import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export function Hero() {
  const [inputText, setInputText] = useState("")
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Hero Title */}
        <h1 className="mb-4 text-white text-center text-4xl font-bold md:text-6xl md:leading-tight">
          TaskBreaker AI
        </h1>
        <p className="mb-6 text-sm text-gray-200 text-center sm:text-xl md:mb-10 lg:mb-12">
          Break down complex tasks into manageable steps
        </p>
        {/* Form */}
        <Card className="mb-8 border-border/50 bg-card backdrop-blur">
          <CardContent className="py-3 px-6">
            <div className="flex items-center p-1 relative rounded-md border border-solid border-black  w-full">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 h-9 w-full px-3 text-sm text-black placeholder:text-black focus:outline-none"
                placeholder="What do you want to accomplish?"
              />
              <Button className="bg-black text-white px-6 py-2 font-semibold">
                Add Task
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
