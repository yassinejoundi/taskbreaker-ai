import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { text, spiciness, ancestors } = await req.json()

    const response = await fetch("https://goblin.tools/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Text: text,
        Spiciness: spiciness,
        Ancestors: ancestors,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Goblin API error: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in /api/todos:", error)
    return NextResponse.json(
      { error: "Failed to fetch subtasks" },
      { status: 500 }
    )
  }
}
