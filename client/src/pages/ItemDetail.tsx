import { useItem } from "@/hooks/use-items";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Loader2 } from "lucide-react";
import { format } from "date-fns";

export default function ItemDetail() {
  const [match, params] = useRoute("/item/:id");
  const id = match && params?.id ? parseInt(params.id) : 0;
  const { data: item, isLoading, error } = useItem(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-xl font-bold font-display text-foreground mb-2">Item not found</h2>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const categoryColor = {
    Work: "bg-blue-100 text-blue-700",
    Personal: "bg-purple-100 text-purple-700",
    Urgent: "bg-red-100 text-red-700",
  }[item.category] || "bg-secondary text-secondary-foreground";

  return (
    <div className="min-h-screen bg-background page-transition pb-20">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="icon" className="-ml-2 mr-2 hover:bg-secondary/80 rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1 text-right">
             <Badge variant="secondary" className={`${categoryColor} border-none px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase`}>
              {item.category}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground leading-tight mb-4">
            {item.title}
          </h1>
          
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Calendar className="w-4 h-4 mr-2 opacity-70" />
            Created {item.createdAt ? format(new Date(item.createdAt), 'MMM d, yyyy') : 'Recently'}
          </div>

          <div className="prose prose-slate prose-p:text-muted-foreground prose-headings:font-display max-w-none">
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Overview</h3>
              <p className="text-lg leading-relaxed text-foreground">
                {item.description}
              </p>
            </div>

            <div className="px-1">
              <h3 className="text-lg font-bold font-display text-foreground mb-3">Full Details</h3>
              <div className="whitespace-pre-wrap leading-relaxed text-foreground/80">
                {item.fullDetails}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
