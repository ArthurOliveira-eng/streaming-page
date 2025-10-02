"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ContentRow } from "@/components/content-row"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<{
    title: string
    image: string
    description: string
  } | null>(null)

  const trendingShows = [
    {
      id: 1,
      title: "Stranger Things",
      image: "/stranger-things-inspired-poster.png",
      description:
        "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experiências secretas.",
    },
    {
      id: 2,
      title: "The Crown",
      image: "/the-crown-poster.jpg",
      description: "A história da Rainha Elizabeth II e os eventos políticos que moldaram o século XX.",
    },
    {
      id: 3,
      title: "Wednesday",
      image: "/wednesday-addams-poster.jpg",
      description: "Wednesday Addams investiga uma onda de assassinatos enquanto tenta dominar seus poderes psíquicos.",
    },
    {
      id: 4,
      title: "Breaking Bad",
      image: "/breaking-bad-inspired-poster.png",
      description: "Um professor de química se torna fabricante de metanfetamina após ser diagnosticado com câncer.",
    },
    {
      id: 5,
      title: "The Witcher",
      image: "/witcher-inspired-poster.png",
      description: "Geralt de Rívia, um caçador de monstros solitário, luta para encontrar seu lugar em um mundo.",
    },
    {
      id: 6,
      title: "Squid Game",
      image: "/generic-survival-game-poster.png",
      description: "Centenas de jogadores endividados aceitam um convite para competir em jogos infantis.",
    },
  ]

  const popularMovies = [
    {
      id: 7,
      title: "The Irishman",
      image: "/the-irishman-movie-poster.png",
      description: "Um assassino de aluguel relembra sua possível participação no assassinato de Jimmy Hoffa.",
    },
    {
      id: 8,
      title: "Extraction",
      image: "/extraction-movie-poster.jpg",
      description: "Um mercenário é contratado para resgatar o filho sequestrado de um traficante internacional.",
    },
    {
      id: 9,
      title: "Glass Onion",
      image: "/glass-onion-movie-poster.jpg",
      description: "O detetive Benoit Blanc viaja para a Grécia para desvendar um mistério envolvendo um bilionário.",
    },
    {
      id: 10,
      title: "Red Notice",
      image: "/red-notice-movie-poster.jpg",
      description: "Um agente do FBI se une ao maior ladrão de arte do mundo para capturar uma criminosa.",
    },
    {
      id: 11,
      title: "Don't Look Up",
      image: "/dont-look-up-movie-poster.jpg",
      description: "Dois astrônomos tentam alertar a humanidade sobre um cometa que se aproxima da Terra.",
    },
    {
      id: 12,
      title: "The Adam Project",
      image: "/adam-project-movie-poster.jpg",
      description: "Um piloto viaja no tempo e se une ao seu eu mais jovem para salvar o futuro.",
    },
  ]

  const newReleases = [
    {
      id: 13,
      title: "The Night Agent",
      image: "/night-agent-poster.jpg",
      description: "Um agente do FBI trabalha no porão da Casa Branca atendendo uma linha de emergência.",
    },
    {
      id: 14,
      title: "You",
      image: "/you-series-poster.jpg",
      description: "Um gerente de livraria obcecado usa a internet e as redes sociais para se aproximar de mulheres.",
    },
    {
      id: 15,
      title: "Ozark",
      image: "/ozark-series-poster.jpg",
      description: "Um consultor financeiro muda sua família para os Ozarks após um esquema de lavagem de dinheiro.",
    },
    {
      id: 16,
      title: "The Queen's Gambit",
      image: "/queens-gambit-poster.jpg",
      description: "Uma órfã prodígio do xadrez luta contra o vício enquanto busca se tornar a melhor jogadora.",
    },
    {
      id: 17,
      title: "Bridgerton",
      image: "/bridgerton-series-poster.jpg",
      description: "A elite londrina durante a era da Regência compete por amor e status social.",
    },
    {
      id: 18,
      title: "Money Heist",
      image: "/money-heist-inspired-poster.png",
      description: "Um grupo de ladrões planeja o maior assalto da história da Espanha.",
    },
  ]

  const handleMovieClick = (item: { id: number; title: string; image: string; description: string }) => {
    console.log("[v0] Movie clicked:", item.title)
    setSelectedMovie(item)
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        {selectedMovie ? (
          <>
            <img
              src={selectedMovie.image || "/placeholder.svg"}
              alt={selectedMovie.title}
              className="h-full w-full object-cover object-center"
              style={{ imageRendering: "high-quality" }}
            />
            <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
          </>
        ) : (
          <>
            <img
              src="/cinematic-dark-moody-streaming-service-hero-backgr.jpg"
              alt="Background"
              className="h-full w-full object-cover object-center"
              style={{ imageRendering: "high-quality" }}
            />
            <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
          </>
        )}
      </div>

      <div className="relative z-10">
        <Header />
        <HeroBanner selectedMovie={selectedMovie} />
        <div className="relative -mt-32 space-y-12 pb-20">
          <ContentRow title="Em Alta" items={trendingShows} onItemClick={handleMovieClick} />
          <ContentRow title="Filmes Populares" items={popularMovies} onItemClick={handleMovieClick} />
          <ContentRow title="Lançamentos" items={newReleases} onItemClick={handleMovieClick} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
