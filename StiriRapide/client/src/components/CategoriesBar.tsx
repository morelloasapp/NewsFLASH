import { categories, type Category } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoriesBarProps {
  selectedCategory?: Category | "all";
  onCategorySelect?: (category: Category | "all") => void;
}

export function CategoriesBar({ selectedCategory = "all", onCategorySelect }: CategoriesBarProps) {
  const allCategories = ["Toate", ...categories] as const;

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="w-full">
        <div className="flex gap-2 p-4 container mx-auto">
          {allCategories.map((category) => {
            const isSelected = category === "Toate" 
              ? selectedCategory === "all" 
              : selectedCategory === category;
            
            const categoryValue = category === "Toate" ? "all" : category;

            return (
              <Badge
                key={category}
                variant={isSelected ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap px-4 py-2 text-sm font-medium transition-all hover-elevate"
                onClick={() => onCategorySelect?.(categoryValue as Category | "all")}
                data-testid={`badge-category-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
