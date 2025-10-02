"use client"

import { Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearchClick = () => {
    console.log("[v0] Search clicked")
    setShowSearch(!showSearch)
  }

  const handleNotificationsClick = () => {
    console.log("[v0] Notifications clicked")
  }

  const handleProfileClick = () => {
    console.log("[v0] Profile clicked")
  }

  const handleNavClick = (section: string) => {
    console.log("[v0] Navigation clicked:", section)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl"
          : "bg-gradient-to-b from-background/40 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bebas tracking-wide text-primary md:text-2xl">Project Streaming</h1>
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => handleNavClick("Início")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick("Séries")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Séries
            </button>
            <button
              onClick={() => handleNavClick("Filmes")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Filmes
            </button>
            <button
              onClick={() => handleNavClick("Bombando")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Bombando
            </button>
            <button
              onClick={() => handleNavClick("Minha Lista")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Minha Lista
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
            className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNotificationsClick}
            className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <button
            onClick={handleProfileClick}
            className="h-8 w-8 rounded-lg bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center"
          >
            <User className="h-5 w-5 text-accent-foreground" />
          </button>
        </div>
      </div>
      {showSearch && (
        <div className="px-4 pb-4 md:px-12">
          <input
            type="text"
            placeholder="Buscar filmes, séries..."
            className="w-full rounded-lg bg-background/60 backdrop-blur-xl border border-border px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            autoFocus
          />
        </div>
      )}
    </header>
  )
}
