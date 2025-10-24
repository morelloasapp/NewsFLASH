import { type Article } from "@shared/schema";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { Calendar } from "lucide-react";

interface HeroArticleProps {
  article: Article;
}

export function HeroArticle({ article }: HeroArticleProps) {
  return (
    <article 
      className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden group cursor-pointer"
      data-testid={`article-hero-${article.id}`}
    >
      <div className="absolute inset-0">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12 md:pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span 
                className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-md"
                data-testid={`badge-category-${article.category.toLowerCase()}`}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-white/90 text-sm">
                <Calendar className="h-4 w-4" />
                <time dateTime={new Date(article.publishedAt).toISOString()}>
                  {format(new Date(article.publishedAt), "d MMMM yyyy", { locale: ro })}
                </time>
              </div>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)" }}
              data-testid="text-hero-title"
            >
              {article.title}
            </h1>
            
            <p 
              className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
              data-testid="text-hero-summary"
            >
              {article.summary}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
