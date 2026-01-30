import { useItems } from "@/hooks/use-items";
import { Header } from "@/components/Header";
import { ItemCard } from "@/components/ItemCard";
import { Loader2, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: items, isLoading, error } = useItems();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-destructive mb-2 font-bold">Error loading items</div>
        <div className="text-muted-foreground text-center">{error.message}</div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="My Items" showAdd={true} />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {!items || items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
            <div className="bg-secondary/50 p-6 rounded-full mb-4">
              <PackageOpen className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">No items yet</h3>
            <p className="text-muted-foreground max-w-[250px]">
              Tap the + button above to create your first item.
            </p>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {items.map((item) => (
              <motion.div key={item.id} variants={itemAnim}>
                <ItemCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}
