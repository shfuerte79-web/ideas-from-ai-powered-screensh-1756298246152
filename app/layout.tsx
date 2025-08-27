import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Knowledge Transformer",
    "one_liner": "Turn your screenshots into summarized action items for personal or team use.",
    "why_now": "Remote work is booming, increasing the need for streamlined information sharing.",
    "novel_mechanism": "Combining OCR with NLP to summarize key points and generate tasks from screenshots.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Turning lectures screenshots into study notes",
      "Converting meeting screenshots into actionable task lists"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR from screenshots",
        "task summarization",
        "user notification system"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "public dataset of notes",
        "user-uploaded screenshots"
      ],
      "risk": [
        "high error rate in summarization",
        "user trust issues"
      ],
      "mitigation": [
        "allow user adjustments",
        "build a feedback loop"
      ]
    },
    "go_to_market": {
      "hooks": [
        "immediate productivity boost demo",
        "before/after with and without the tool"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "Discord"
      ],
      "pricing": {
        "free": "Limited to 10 screenshots/day",
        "pro": "$9.99/month for unlimited use and premium features",
        "business": "$29.99/month for team use with collaboration tools"
      }
    },
    "moat": [
      "first-mover advantage in the space of visual task management",
      "integrations with project management tools",
      "user-generated task templates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This product addresses the growing challenge of information overload, offering tangible benefits through a unique synthesis of existing technologies instead of rehashing typical OCR solutions."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}