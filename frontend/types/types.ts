export interface RoadmapStage {
    id: number
    title: string
    description: string
    completed: boolean
    quarter: string // e.g., "Q2 2025"
    items: string[]
}

export interface Chapter {
    id: number
    numeral: string
    title: string
    content: string[]
    image?: string
}
