import Image from "next/image"
import type { Chapter } from "@/types/types"

interface ChapterContentProps {
  chapter?: Chapter
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  if (!chapter) {
    return <div className="text-center text-amber-800">Select a chapter to read</div>
  }

  return (
    <div className="flex flex-col gap-8 bg-amber-100 p-6 rounded-lg border-2 border-amber-700 border-dashed transform hover:rotate-0.5 transition-transform">
      {chapter.image && (
        <div className="flex justify-center">
          <div style={{ backgroundImage: `url(${chapter.image})` }} className={"bg-[url('/images/chapters/chapter1_resized.PNG')] w-full md:h-[700px] h-[300px] bg-cover bg-center"}></div>
        </div>
      )}

      <div className="p-4 rounded-lg border border-amber-300 shadow-inner ">
        <h2 className="sm:text-[64px] text-[45px]  font-bold text-amber-900 mb-8 font-amsc transform -rotate-1">
          Chapter {chapter.numeral}: {chapter.title}
        </h2>

        <div className="prose prose-amber max-w-none">
          {chapter.content.map((paragraph, index) => (
            <p key={index} className="text-amber-800 rounded mb-1 font-black font-amsc text-2xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
