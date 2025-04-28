import { CheckCircle, Circle } from "lucide-react"
import type { RoadmapStage } from "@/types/types"

interface RoadmapSectionProps {
    stages: RoadmapStage[]
}

export default function RoadmapSection({ stages }: RoadmapSectionProps) {
    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-amber-900 mb-4 font-vt323 transform -rotate-1">
                    🍲 COCKPOT ROADMAP 🍲
                </h2>
                <p className="text-xl text-amber-800 max-w-2xl mx-auto">
                    The recipe for our delicious journey to crypto domination
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-700 hidden md:block"></div>

                <div className="space-y-12">
                    {stages.map((stage, index) => (
                        <div key={stage.id} className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-amber-800 text-amber-50 px-3 py-1 rounded-full font-vt323 text-sm z-10 hidden md:block">
                                {stage.quarter}
                            </div>

                            <div
                                className={`flex flex-col ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } items-center gap-4`}
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 border-4 border-amber-700 z-10">
                                    {stage.completed ? (
                                        <CheckCircle className="w-6 h-6 text-amber-700" />
                                    ) : (
                                        <Circle className="w-6 h-6 text-amber-700" />
                                    )}
                                </div>

                                <div
                                    className={`bg-amber-100 p-6 rounded-lg border-2 border-amber-700 border-dashed w-full md:w-[calc(50%-2rem)] ${
                                        stage.completed ? "bg-amber-200" : ""
                                    }`}
                                >
                                    <div className="md:hidden mb-2 bg-amber-800 text-amber-50 px-3 py-1 rounded-full font-vt323 text-sm inline-block">
                                        {stage.quarter}
                                    </div>
                                    <h3 className="text-2xl font-bold text-amber-900 mb-2 font-vt323">{stage.title}</h3>
                                    <p className="text-amber-800 mb-4">{stage.description}</p>
                                    <ul className="space-y-2">
                                        {stage.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-amber-600 mt-1">•</span>
                                                <span className="text-amber-800">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}