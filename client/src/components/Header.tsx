import { Link } from "wouter";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header({ title, showAdd = false }: { title: string; showAdd?: boolean }) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display text-foreground hover:text-primary transition-colors">
          {title}
        </Link>
        {showAdd && (
          <Link href="/create">
            <Button size="icon" className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              <Plus className="h-5 w-5" />
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
