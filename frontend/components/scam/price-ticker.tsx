"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react"

interface TokenData {
  price: number
  priceChange: number
  marketCap: number
  holders?: number
  totalSupply?: number
  pairAddress: string
  loading: boolean
  error: boolean
}

export default function PriceTicker() {
  const [tokenData, setTokenData] = useState<TokenData>({
    price: 0.0000069,
    priceChange: 4.2,
    marketCap: 4190000,
    totalSupply: 419000000000,
    pairAddress: "0x597d9816ddb9624824591360180a70be6fd26182",
    loading: true,
    error: false,
  })
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchTokenData = async () => {
    setIsRefreshing(true)
    try {
      // Fetch data from Dexscreener API
      const response = await fetch(
          `https://api.dexscreener.com/latest/dex/pairs/bsc/0x597d9816ddb9624824591360180a70be6fd26182`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch token data")
      }

      const data = await response.json()
      console.log(data);

      if (data.pairs && data.pairs.length > 0) {
        const pairData = data.pairs[0]

        setTokenData({
          price: Number.parseFloat(pairData.priceUsd || pairData.priceNative || "0.0000069"),
          priceChange: Number.parseFloat(pairData.priceChange?.h24 || "4.2"),
          marketCap: Number.parseFloat(pairData.fdv || "4190000"),
          totalSupply: tokenData.totalSupply,
          pairAddress: pairData.pairAddress,
          loading: false,
          error: false,
        })

        setLastUpdated(new Date())
      } else {
        throw new Error("No pair data found")
      }
    } catch (error) {
      console.error("Error fetching token data:", error)
      setTokenData({
        ...tokenData,
        loading: false,
        error: true,
      })
    } finally {
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchTokenData()

    const interval = setInterval(() => {
      fetchTokenData()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price < 0.00001) {
      return price.toExponential(4)
    }
    return price.toFixed(price < 0.01 ? 8 : 4)
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1000000000) {
      return `$${(marketCap / 1000000000).toFixed(2)}B`
    } else if (marketCap >= 1000000) {
      return `$${(marketCap / 1000000).toFixed(2)}M`
    } else if (marketCap >= 1000) {
      return `$${(marketCap / 1000).toFixed(2)}K`
    }
    return `$${marketCap.toFixed(2)}`
  }

  const formatSupply = (supply: number) => {
    if (supply >= 1000000000) {
      return `${(supply / 1000000000).toFixed(2)}B`
    } else if (supply >= 1000000) {
      return `${(supply / 1000000).toFixed(2)}M`
    }
    return supply.toString()
  }

  const handleManualRefresh = () => {
    if (!isRefreshing) {
      fetchTokenData()
    }
  }

  return (
      <div className="bg-amber-800 text-amber-50 py-2 overflow-hidden border-t-2 border-b-2 border-amber-900 border-dashed relative">
        {tokenData.loading ? (
            <div className="flex justify-center items-center py-1">
              <RefreshCw className="animate-spin mr-2" size={16} />
              <span className="font-vt323">Loading token data...</span>
            </div>
        ) : tokenData.error ? (
            <div className="flex justify-center items-center py-1">
              <span className="font-vt323">Error loading data. Using estimates.</span>
              <button
                  onClick={handleManualRefresh}
                  className="ml-2 bg-amber-700 hover:bg-amber-600 p-1 rounded"
                  disabled={isRefreshing}
              >
                <RefreshCw className={isRefreshing ? "animate-spin" : ""} size={16} />
              </button>
            </div>
        ) : (
            <div className="marquee">
              <div className="marquee-content">
            <span className="inline-flex items-center gap-1 mx-4">
              <span className="font-vt323 text-xl">$COCKPOT:</span>
              <span className="font-mono">${formatPrice(tokenData.price)}</span>
              <span
                  className={`inline-flex items-center ${tokenData.priceChange >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {tokenData.priceChange >= 0 ? (
                    <>
                      <TrendingUp size={16} className="mr-1" />+{Math.abs(tokenData.priceChange).toFixed(2)}%
                    </>
                ) : (
                    <>
                      <TrendingDown size={16} className="mr-1" />-{Math.abs(tokenData.priceChange).toFixed(2)}%
                    </>
                )}
              </span>
            </span>

                <span className="inline-flex items-center gap-1 mx-4">
              <span className="font-vt323">MARKET CAP:</span>
              <span className="font-mono">{formatMarketCap(tokenData.marketCap)}</span>
            </span>

                <span className="inline-flex items-center gap-1 mx-4">
              <span className="font-vt323">TOTAL SUPPLY:</span>
              <span className="font-mono">{formatSupply(tokenData.totalSupply || 0)}</span>
            </span>

                <span className="inline-flex items-center gap-1 mx-4">
              <span className="font-vt323">LAST UPDATED:</span>
              <span className="font-mono">{lastUpdated.toLocaleTimeString()}</span>
            </span>
              </div>
            </div>
        )}
      </div>
  )
}