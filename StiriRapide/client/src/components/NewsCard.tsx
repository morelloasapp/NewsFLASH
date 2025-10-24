import { type Article } from "@shared/schema";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  article: Article;
  variant?: "standard" | "featured";
}

export function NewsCard({ article, variant = "standard" }: NewsCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Card 
      className={`group cursor-pointer overflow-hidden transition-all duration-300 hover-elevate ${
        isFeatured ? "md:col-span-2" : ""
      }`}
      data-testid={`card-article-${article.id}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isFeatured ? "h-72 md:h-96" : "h-48"
          }`}
        />
        <div className="absolute top-3 left-3">
          <span 
            className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-md"
            data-testid={`badge-category-${article.category.toLowerCase()}`}
          >
            {article.category}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={new Date(article.publishedAt).toISOString()}>
            {format(new Date(article.publishedAt), "d MMMM yyyy", { locale: ro })}
          </time>
        </div>

        <h3 
          className={`font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors ${
            isFeatured ? "text-xl md:text-2xl" : "text-lg"
          }`}
          data-testid="text-article-title"
        >
          {article.title}
        </h3>

        <p 
          className={`text-muted-foreground leading-relaxed ${
            isFeatured ? "text-base line-clamp-3" : "text-sm line-clamp-2"
          }`}
          data-testid="text-article-summary"
        >
          {article.summary}
        </p>
      </CardContent>
    </Card>
  );
}
