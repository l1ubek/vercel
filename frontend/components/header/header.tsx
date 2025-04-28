"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Soup, Menu, X, ExternalLink, Copy, Check } from "lucide-react"
import Web3 from "web3"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [web3, setWeb3] = useState<Web3 | null>(null)
    const [isWalletConnected, setIsWalletConnected] = useState(false)

    const contractAddress = "0x89F4e8011c35831130C4C3aB95e53de9411d2fCc"

    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
        }
    }, []);

    const switchToBSC = async () => {
        console.log("trigerred");
        if (!window.ethereum) return;
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x38" }],
            });
        } catch (switchError: any) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: "0x38",
                                chainName: "Binance Smart Chain Mainnet",
                                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                                nativeCurrency: {
                                    name: "BNB",
                                    symbol: "BNB",
                                    decimals: 18,
                                },
                                blockExplorerUrls: ["https://bscscan.com"],
                            },
                        ],
                    });
                } catch (addError) {
                    console.error("Failed to add BSC network:", addError);
                }
            }
        }
    };

    const connectWallet = async () => {
        console.log("connect wallet triggered");
        if (!web3) return;

        try {
            await switchToBSC();

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setIsWalletConnected(accounts.length > 0);
            return accounts[0];
        } catch (error) {
            console.error("Error connecting wallet:", error);
            return null;
        }
    };


    const handleAddToWallet = async () => {
        console.log("handle add to wallet triggerred")
        if (!web3) {
            alert(
                "Please install MetaMask or another Web3-compatible wallet to add this token."
            );
            return;
        }

        try {
            if (!isWalletConnected) {
                const account = await connectWallet();
                if (!account) return;
            }

            const tokenSymbol = "$419INU";
            const tokenDecimals = 18;
            const tokenImage = `${window.location.origin}/token-logo.png`;

            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: contractAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                console.log("Token added successfully!");
            } else {
                console.log("Token was not added");
            }
        } catch (error) {
            console.error("Error adding token to wallet:", error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

  return (
    <header className="bg-amber-800 text-amber-50 sticky top-0 z-50 shadow-md border-b-4 border-amber-900 border-dashed">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-vt323 animate-wiggle">
            <Soup className="w-8 h-8 animate-spin-slow" />
            <span className="text-3xl tracking-wider">COCKPOT $419INU</span>
          </Link>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
              <div className="relative group">
                  <button
                      onClick={handleAddToWallet}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-600 rounded-lg font-bold hover:bg-amber-500 transition-colors transform hover:rotate-2 border-2 border-amber-900 font-vt323 text-base sm:text-xl flex items-center gap-1 sm:gap-2"
                  >
                      <span>Add to Wallet</span>
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  </button>
              </div>
          </nav>
        </div>

          {isMenuOpen && (
              <nav className="mt-3 pb-2 md:hidden">
                  <ul className="flex flex-col gap-3">
                      <NavLinks mobile onClick={() => setIsMenuOpen(false)} />

                      <div className="mt-2">
                          <button
                              onClick={handleAddToWallet}
                              className="w-full px-4 py-2 bg-amber-600 rounded-lg font-bold hover:bg-amber-500 transition-colors border-2 border-amber-900 font-vt323 text-lg flex items-center justify-center gap-2"
                          >
                              <span>Add to Wallet</span>
                              <ExternalLink size={16} />
                          </button>

                          <div className="mt-2 bg-amber-900 p-2 rounded-lg">
                              <p className="text-xs text-amber-200 mb-1">Contract Address:</p>
                              <div className="flex items-center gap-2 bg-amber-800 p-1 rounded">
                                  <code className="text-xs text-amber-100 overflow-hidden overflow-ellipsis">{contractAddress}</code>
                                  <button
                                      onClick={copyToClipboard}
                                      className="text-amber-200 hover:text-amber-100"
                                      aria-label="Copy contract address"
                                  >
                                      {copied ? <Check size={14} /> : <Copy size={14} />}
                                  </button>
                              </div>
                          </div>
                      </div>
                  </ul>
              </nav>
          )}
      </div>
    </header>
  )
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const linkClass = mobile
    ? "text-lg font-medium hover:text-amber-200 transition-colors py-2 font-vt323 text-xl"
    : "text-lg font-medium hover:text-amber-200 transition-colors font-vt323 text-xl"

  return (
      <>
          <Link href="/" className={linkClass} onClick={onClick}>
              Home
          </Link>
          <Link href="/lore" className={linkClass} onClick={onClick}>
              Lore
          </Link>
          <Link href="/#tokenomics" className={linkClass} onClick={onClick}>
              Tokenomics
          </Link>
      </>
  )
}

declare global {
    interface Window {
        ethereum?: any
    }
}