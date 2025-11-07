# TaskBreaker AI

> Break down complex tasks into manageable steps with AI-powered task decomposition

![TaskBreaker AI](https://img.shields.io/badge/Next.js-16.0-black) ![React](https://img.shields.io/badge/React-19.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Overview

TaskBreaker AI is an intelligent to-do list application that uses AI to automatically break down overwhelming tasks into actionable subtasks. No more staring at "build a mobile app" wondering where to start—TaskBreaker gives you a clear, step-by-step plan.

### ✨ Key Features

- **🤖 AI-Powered Breakdown**: Automatically decomposes complex tasks into manageable steps
- **✅ Nested Task Management**: Organize tasks in a hierarchical structure with unlimited nesting
- **💾 Persistent Storage**: Your tasks are saved locally and survive page refreshes
- **🎨 Modern UI**: Clean, responsive design built with Tailwind CSS and shadcn/ui
- **⚡ Fast & Lightweight**: Built on Next.js 16 with optimized performance
- **📱 Mobile Friendly**: Fully responsive design that works on all devices

## 🎯 Use Cases

Perfect for:

- **Project Planning**: Break down large projects into actionable steps
- **Learning Goals**: Decompose "learn React" into specific learning milestones
- **Career Development**: Turn "get promoted" into concrete actions
- **Side Hustles**: Plan your next business idea with clear execution steps
- **Life Goals**: Make overwhelming goals achievable with structured planning

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **AI Integration**: Goblin.tools API for task decomposition

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yassinejoundi/taskbreaker-ai.git
   cd taskbreaker-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### Adding a Task

1. Type your task in the input field (e.g., "Launch a podcast")
2. Click "Add Task" or press Enter
3. Your task appears in the task list below

### Breaking Down Tasks

1. Click the **"Breakdown"** button next to any task
2. Wait a few seconds while AI analyzes your task
3. Expand the task to see all subtasks
4. Each subtask can be further broken down if needed

### Managing Tasks

- **Complete**: Check the box next to a task to mark it complete
- **Expand/Collapse**: Click the chevron icon to show/hide subtasks
- **Delete**: Click the trash icon to remove a task

## 🏗️ Project Structure

```
taskbreaker-ai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── todos/
│   │   │       └── route.ts          # API route for AI breakdown
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── Hero.tsx                  # Hero section with input
│   │   └── TaskItem.tsx              # Individual task component
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   └── store/
│       └── useTaskStore.ts           # Zustand state management
├── public/                           # Static assets
├── package.json
└── tsconfig.json
```

## 🔧 Configuration

### Customization

- **Styling**: Modify `src/app/globals.css` for theme customization
- **AI Settings**: Adjust "spiciness" (detail level) in `useTaskStore.ts`
- **UI Components**: Customize shadcn/ui components in `src/components/ui/`

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy on Other Platforms

- **Netlify**: Use the Next.js adapter
- **Railway**: Connect your GitHub repo
- **Self-hosted**: Run `npm run build` and `npm start`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Ideas for Contributions

- Add user authentication
- Implement task prioritization
- Add due dates and reminders
- Create task templates
- Add export functionality (PDF, JSON)
- Implement collaborative tasks
- Add keyboard shortcuts
- Create a mobile app

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser/device information

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Vercel](https://vercel.com/) for Next.js and hosting
- The open-source community for inspiration and tools

## 📧 Contact

- **Twitter/X**: [@mee_yassine](https://twitter.com/mee_yassine)
- **LinkedIn**: [Yassine Joundi](https://linkedin.com/in/yassinejoundi)
- **Email**: joundiyassine@outlook.com

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/yassinejoundi">Yassine Joundi</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
