"use client"

import Image from "next/image"
import Link from "next/link"
import { Utensils, Soup, Crown, CookingPot, Sparkles, Zap, Flame } from "lucide-react"
import RoadmapSection from "@/components/roadmap/roadmap";
import {roadmapStages} from "@/data/roadmap";

export default function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="flex-1">
          <a target="_blank" href={"https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x89F4e8011c35831130C4C3aB95e53de9411d2fCc&exactAmount=&exactField=INPUT"}>
            <div className={"font-vt323 border-2 border-amber-900 p-2 bg-amber-100 text-amber-900 sm:text-[40px] text-[14px] font-bold mb-5"}>
              0x89F4e8011c35831130C4C3aB95e53de9411d2fCc
            </div>
          </a>
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-900 mb-6 font-vt323 tracking-wider transform -rotate-1">
            COCKPOT<span className="text-amber-600 inline-block animate-wiggle">419INU</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800 font-vt323">
            The legendary cockpot, blessed by Prince Cockington himself!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/lore"
              className="px-6 py-3 bg-amber-600 text-amber-50 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors flex items-center gap-2 transform hover:rotate-2 border-2 border-amber-900 font-vt323 text-xl"
            >
              <Crown size={20} className="animate-pulse" />
              Discover the Lore
            </Link>
            <div
                onClick={() => scrollToSection("tokenomics")}
              className="px-6 py-3 cursor-pointer bg-amber-800 text-amber-50 rounded-lg font-bold text-lg hover:bg-amber-900 transition-colors flex items-center gap-2 transform hover:-rotate-2 border-2 border-amber-900 font-vt323 text-xl"
            >
              <CookingPot size={20} className="animate-spin-slow" />
              Tokenomics
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 hidden lg:block">
            <Image
              src="/monkey.jpg"
              alt="Prince Coggington Proclamation"
              fill
              className="object-contain rounded-full border-8 border-amber-900"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl py-12 border-t-4 border-amber-700 border-dashed">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-900 mb-4 font-vt323 transform -rotate-1">
            <Sparkles className="inline-block mr-2 text-amber-600" />
            The Royal Cocks
            <Sparkles className="inline-block ml-2 text-amber-600" />
          </h2>
        </div>

        <div className={"flex justify-center"}>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Image src={"/images/cocks/cock1.jpg"} width={300} height={500} alt={""} className={"rounded-lg border-2 border-dashed border-amber-700 transform hover:rotate-1 transition-transform"}/>
           <Image src={"/images/cocks/cock2.jpg"} width={300} height={500} alt={""} className={"rounded-lg border-2 border-dashed border-amber-700 transform hover:rotate-1 transition-transform"}/>
           <Image src={"/images/cocks/cock3.jpg"} width={300} height={500} alt={""} className={"rounded-lg border-2 border-dashed border-amber-700 transform hover:rotate-1 transition-transform"}/>
         </div>
        </div>
      </section>

      <section id="tokenomics" className="w-full max-w-5xl py-12 border-t-4 border-amber-700 border-dashed">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-900 mb-4 font-vt323 transform rotate-1">
            <Flame className="inline-block mr-2 text-amber-600" />
            COCKPOT419INU TOKENOMICS
            <Flame className="inline-block ml-2 text-amber-600" />
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">The sacred recipe for our crypto soup</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/images/tokenomics.jpg"
              alt="COCKPOT419INU Tokenomics"
              width={500}
              height={700}
              className="rounded-lg border-4 border-amber-800"
            />
          </div>

          <div className="flex-1 bg-amber-100 p-6 rounded-lg border-2 border-amber-700 border-dashed transform -rotate-1">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 font-vt323">The Sacred Distribution</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">45%</span>
                <span className="text-amber-800">DEX Liquidity - The broth base</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">9%</span>
                <span className="text-amber-800">Airdrop - Sprinkled seasoning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">10%</span>
                <span className="text-amber-800">Marketing - Spreading the aroma</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">10%</span>
                <span className="text-amber-800">Early Contributors - The sous chefs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">5%</span>
                <span className="text-amber-800">Cross-Chain (Solana) - Extra flavor</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">8%</span>
                <span className="text-amber-800">Buyback - Refilling the pot</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">8%</span>
                <span className="text-amber-800">Rewards - Tasty treats</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600 font-bold text-xl">5%</span>
                <span className="text-amber-800">CEX Listing - Serving to the masses</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-amber-900 font-bold">Total Supply: 419,000,000,0 $COCKPOT</p>
              <p className="text-amber-700 italic mt-2">
                "In a thagae bilo cluck, i cluck bilo u sockpot bul gas-fee."
              </p>
              <p className="text-amber-700 italic">- scrolls of crypto chicks, glava 0, stich</p>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" className="w-full max-w-5xl py-12 border-t-4 border-amber-700 border-dashed">
        <RoadmapSection stages={roadmapStages} />
      </section>

      <section className="w-full max-w-5xl py-12 border-t-4 border-amber-700 border-dashed">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-900 mb-4 font-vt323 transform -rotate-2">
            <Zap className="inline-block mr-2 text-amber-600 animate-pulse" />
            JOIN THE CULT
            <Zap className="inline-block ml-2 text-amber-600 animate-pulse" />
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">Embrace the wisdom of Prince Coggington</p>
        </div>

        <div className="flex justify-center">
          <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-27%2001.11.09-4MvPOfCjlh6UeiL9WwxpmCmmLJ74we.jpeg"
              alt="Join the COCKPOT Cult"
              width={400}
              height={600}
              className="rounded-lg border-4 border-amber-800"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-amber-900 font-vt323 transform rotate-1 inline-block">
            "He who enters the chat, enters the prophecy."
          </p>
          <p className="text-xl text-amber-800 mt-2 italic">— Prince Coggington</p>
        </div>

        <div className="flex flex-wrap justify-center mt-6 gap-3 sm:gap-4">
          <a
              href="https://t.me/memcoin_scummers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-700 text-amber-50 rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 transform hover:rotate-2 border-2 border-amber-900 font-vt323 text-xl"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Telegram
          </a>
          <a
              href="https://x.com/cockpot419inu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-700 text-amber-50 rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 transform hover:-rotate-2 border-2 border-amber-900 font-vt323 text-xl"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            Twitter
          </a>
          <a
              href="https://dexscreener.com/bsc/0x597d9816ddb9624824591360180a70be6fd26182"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-700 text-amber-50 rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 transform hover:rotate-2 border-2 border-amber-900 font-vt323 text-xl"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bar-chart-2"
            >
              <line x1="18" x2="18" y1="20" y2="10" />
              <line x1="12" x2="12" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="14" />
            </svg>
            Dexscreener
          </a>
        </div>
      </section>
    </div>
  )
}
