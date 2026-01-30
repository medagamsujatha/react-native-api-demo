import { Link } from "wouter";
import { type Item } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ItemCard({ item }: { item: Item }) {
  const categoryColor = {
    Work: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    Personal: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    Urgent: "bg-red-100 text-red-700 hover:bg-red-200",
  }[item.category] || "bg-secondary text-secondary-foreground hover:bg-secondary/80";

  return (
    <Link href={`/item/${item.id}`} className="block group">
      <div className="
        relative bg-card rounded-2xl p-5 border border-border/50
        shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20
        transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.99]
      ">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className={`${categoryColor} border-none px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase`}>
            {item.category}
          </Badge>
          <div className="text-muted-foreground/50 group-hover:text-primary transition-colors">
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1 font-display leading-tight">{item.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{item.description}</p>
      </div>
    </Link>
  );
}
