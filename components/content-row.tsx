"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContentItem {
  id: number
  title: string
  image: string
  description: string
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
  onItemClick?: (item: ContentItem) => void
}

export function ContentRow({ title, items, onItemClick }: ContentRowProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`row-${title}`)
    if (!container) return

    const scrollAmount = direction === "left" ? -800 : 800
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    setScrollPosition(container.scrollLeft + scrollAmount)
  }

  const handleItemClick = (item: ContentItem) => {
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <div className="group relative px-6 md:px-16 lg:px-20">
      <h3 className="mb-6 text-2xl font-bold text-foreground md:text-3xl tracking-tight">{title}</h3>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 z-10 h-full -translate-y-1/2 rounded-xl bg-background/60 opacity-0 transition-all hover:bg-background/90 group-hover:opacity-100 backdrop-blur-md hover:scale-110"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-10 w-10 text-foreground" />
        </Button>
        <div
          id={`row-${title}`}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group/item relative min-w-[220px] cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 md:min-w-[280px]"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-[320px] w-full rounded-2xl object-cover md:h-[380px] ring-2 ring-transparent transition-all group-hover/item:ring-4 group-hover/item:ring-accent shadow-2xl"
              />
              <div className="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 transition-all duration-300 group-hover/item:opacity-100">
                <p className="p-5 text-base font-bold text-foreground md:text-lg drop-shadow-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 z-10 h-full -translate-y-1/2 rounded-xl bg-background/60 opacity-0 transition-all hover:bg-background/90 group-hover:opacity-100 backdrop-blur-md hover:scale-110"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-10 w-10 text-foreground" />
        </Button>
      </div>
    </div>
  )
}
