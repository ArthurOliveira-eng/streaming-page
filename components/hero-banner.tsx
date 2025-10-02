import { Play, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  selectedMovie?: {
    title: string
    image: string
    description: string
  } | null
}

export function HeroBanner({ selectedMovie }: HeroBannerProps) {
  const movie = selectedMovie || {
    title: "Stranger Things",
    description:
      "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experiências secretas, forças sobrenaturais aterrorizantes e uma garota muito estranha.",
  }

  return (
    <div className="relative h-[85vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative flex h-full items-center px-6 md:px-16 lg:px-20">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-6xl font-black text-foreground md:text-8xl text-balance tracking-tight drop-shadow-2xl">
            {movie.title}
          </h2>
          <p className="text-xl text-foreground/95 md:text-2xl leading-relaxed text-pretty max-w-2xl drop-shadow-lg font-normal">
            {movie.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl px-8 py-6 text-lg transition-all hover:scale-105 shadow-xl"
            >
              <Play className="mr-2 h-6 w-6 fill-current" />
              Assistir
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-muted/80 text-foreground hover:bg-muted/60 font-bold backdrop-blur-md rounded-xl px-8 py-6 text-lg transition-all hover:scale-105 shadow-xl"
            >
              <Info className="mr-2 h-6 w-6" />
              Mais Informações
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
