import type React from "react"
import type { Metadata } from "next"
import { VT323, Comic_Neue, Amatic_SC} from "next/font/google"
import "./globals.css"
import Header from "@/components/header/header"
import PriceTicker from "@/components/scam/price-ticker"

const amsc = Amatic_SC({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-amsc"
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comic",
})

export const metadata: Metadata = {
  title: "COCKPOT - The Soup of Crypto",
  description: "The legendary tale of Prince Cockington and his magical COCKPOT soup",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${comicNeue.variable} ${amsc.variable} font-comic min-h-screen`}>
        <FloatingElements />
        <Header />
        <PriceTicker />
        <main className="container mx-auto px-4 py-8 relative z-10">{children}</main>
        <footer className="bg-amber-800 text-amber-50 py-4 border-t-4 border-amber-900 border-dashed mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-vt323 text-xl">© 2025 COCKPOT419INU | NOT FINANCIAL ADVICE</p>
            <p className="text-amber-200 text-sm mt-2">1 $COCKPOT = 1 $COCKPOT | Price go up, price go down, but soup always tasty!</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
            opacity: 0.15,
          }}
        >
          {["🍲", "🐔", "👑", "💰", "🥣"][i % 5]}
        </div>
      ))}
    </div>
  )
}
