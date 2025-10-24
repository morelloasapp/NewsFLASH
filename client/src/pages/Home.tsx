import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { CategoriesBar } from "@/components/CategoriesBar";
import { HeroArticle } from "@/components/HeroArticle";
import { NewsCard } from "@/components/NewsCard";
import { VideoSection } from "@/components/VideoSection";
import { type Category, type Article } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  const { data: articles, isLoading, error } = useQuery<Article[]>({
    queryKey: selectedCategory === "all" 
      ? ["/api/articles"] 
      : ["/api/articles", { category: selectedCategory }],
  });

  const { data: featuredArticle } = useQuery<Article>({
    queryKey: ["/api/articles/featured"],
  });

  const heroArticle = featuredArticle || articles?.[0];
  const regularArticles = articles?.filter(a => a.isFeatured !== "true") || [];
  
  const firstFiveArticles = regularArticles.slice(0, 5);
  const remainingArticles = regularArticles.slice(5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoriesBar 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory}
      />
      
      <main>
        {isLoading ? (
          <div className="h-[85vh] md:h-[90vh] bg-muted animate-pulse" />
        ) : heroArticle ? (
          <HeroArticle article={heroArticle} />
        ) : null}

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="text-latest-news">
            Ultimele știri
          </h2>

          {error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                A apărut o eroare la încărcarea știrilor. Vă rugăm să reîncărcați pagina.
              </AlertDescription>
            </Alert>
          ) : isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={i === 0 ? "md:col-span-2" : ""}>
                  <Skeleton className={i === 0 ? "h-96" : "h-80"} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {firstFiveArticles.map((article, index) => (
                <NewsCard 
                  key={article.id} 
                  article={article} 
                  variant={index === 0 ? "featured" : "standard"}
                />
              ))}
            </div>
          )}
        </section>

        <VideoSection
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Reportaj: Dezvoltarea turismului la Marea Neagră"
          description="Descoperă planurile de dezvoltare turistică pentru zona Constanța și ce schimbări ne așteaptă în următorii ani."
        />

        {!isLoading && remainingArticles.length > 0 && (
          <section className="container mx-auto px-4 pb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="text-more-news">
              Mai multe știri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm" data-testid="text-footer">
            © 2025 Callatis Press. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
