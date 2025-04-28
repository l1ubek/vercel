"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Timeline from "@/components/lore/timeline"
import ChapterContent from "@/components/lore/chapter-content"
import { chapters } from "@/data/chapters"

export default function LorePage() {
  const [activeChapter, setActiveChapter] = useState(1)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="text-center mb-12 bg-amber-100/90 p-4 rounded-lg border-2 border-amber-700 border-dashed">
        <h1 className="text-5xl font-extrabold text-amber-900 mb-4 font-vt323 transform -rotate-1">
          The COCKPOT Chronicles
        </h1>
        <p className="text-2xl text-amber-800 max-w-3xl mx-auto font-vt323">
          The legendary tale of how COCKPOT came to rule the crypto coop.
        </p>
      </div>

      <Timeline chapters={chapters} activeChapter={activeChapter} setActiveChapter={setActiveChapter} />

      <div className="mt-16">
        <ChapterContent chapter={chapters.find((c) => c.id === activeChapter)} />
      </div>
    </div>
  )
}
