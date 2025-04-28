"use client"

import { useRef, useEffect } from "react"
import type { Chapter } from "@/types/types"

interface TimelineProps {
  chapters: Chapter[]
  activeChapter: number
  setActiveChapter: (id: number) => void
}

export default function Timeline({ chapters, activeChapter, setActiveChapter }: TimelineProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.classList.add("cursor-grabbing");
    };

    const onMouseUpOrLeave = () => {
        if (!scrollContainerRef.current) return;
        isDragging.current = false;
        scrollContainerRef.current.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // scroll speed
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
            <div className="w-full">
                <div className={""}></div>

                <div         ref={scrollContainerRef}
                             className="overflow-x-auto select-none cursor-grab
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                             onMouseDown={onMouseDown}
                             onMouseLeave={onMouseUpOrLeave}
                             onMouseUp={onMouseUpOrLeave}
                             onMouseMove={onMouseMove}
                             style={{ userSelect: "none" }} >
                    <div className="flex items-center min-w-max px-4 py-8">
                        <div className="h-1 bg-amber-700 w-20"></div>

                        {chapters.map((chapter, index) => (
                            <div className={"flex items-center"} key={chapter.id}>
                                <div
                                    key={chapter.id}
                                    className={`text-center p-2 border-2 border-[#92400e] cursor-pointer transition-all ${
                                        chapter.id === activeChapter
                                            ? "text-amber-900 border-[#92400e] bg-[#ffff70] font-bold scale-105 shadow-[0_0_20px_5px_rgba(253,255,134,1),inset_0_0_16px_2px_rgba(251,191,36,0.5)]"
                                            
                                            : "hover:text-amber-900"
                                    }`}
                                    onClick={() => setActiveChapter(chapter.id)}
                                >
                                    <div className="text-xl font-black font-mono">{chapter.numeral}</div>
                                    <div className="text-xl font-bold">{chapter.title}</div>
                                </div>
                                {index < chapters.length - 1 && <div className="h-1 bg-amber-700 w-20"></div>}
                            </div>
                        ))}

                        <div className="h-1 bg-amber-700 w-20"></div>
                    </div>
                </div>
            </div>
        );

}
