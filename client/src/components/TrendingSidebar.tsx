import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArticleCard from "./ArticleCard";

interface TrendingArticle {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  slug: string;
}

interface TrendingSidebarProps {
  articles: TrendingArticle[];
  onArticleClick?: (slug: string) => void;
}

export default function TrendingSidebar({ articles, onArticleClick }: TrendingSidebarProps) {
  return (
    <Card className="sticky top-24 border-card-border" data-testid="card-trending">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Trending
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description=""
            imageUrl={article.imageUrl}
            category={article.category}
            date={article.date}
            slug={article.slug}
            onClick={onArticleClick}
            variant="list"
          />
        ))}
      </CardContent>
    </Card>
  );
}
