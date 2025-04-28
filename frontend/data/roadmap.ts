import type { RoadmapStage } from "@/types/types"

export const roadmapStages: RoadmapStage[] = [
    {
        id: 1,
        title: "The Broth Base",
        description: "Establishing the foundation of our delicious crypto soup",
        completed: true,
        quarter: "Q1 2025",
        items: [
            "Token smart contract development",
            "Website launch",
            "Community building",
            "Social media presence",
            "Initial marketing campaign",
        ],
    },
    {
        id: 2,
        title: "The Ingredients",
        description: "Adding flavor and utility to the COCKPOT ecosystem",
        completed: false,
        quarter: "Q2 2025",
        items: [
            "DEX listings",
            "Liquidity pool establishment",
            "Partnership announcements",
            "Community airdrops",
            "Meme contest launch",
        ],
    },
    {
        id: 3,
        title: "The Simmer",
        description: "Growing and expanding the COCKPOT community",
        completed: false,
        quarter: "Q3 2025",
        items: [
            "CEX listings",
            "COCKPOT merchandise store",
            "Enhanced tokenomics",
            "Cross-chain expansion",
            "Community governance implementation",
        ],
    },
    {
        id: 4,
        title: "The Feast",
        description: "Bringing COCKPOT to the masses",
        completed: false,
        quarter: "Q4 2025",
        items: [
            "Major exchange listings",
            "Mobile app development",
            "COCKPOT NFT collection",
            "Real-world partnerships",
            "Charitable initiatives",
        ],
    },
]