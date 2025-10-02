export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/20 bg-background/40 backdrop-blur-xl py-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg font-semibold text-foreground/90">Created by Arthur Oliveira</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Project Streaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
