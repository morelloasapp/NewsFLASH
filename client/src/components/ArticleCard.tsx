import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author?: string;
  date: string;
  slug: string;
  onClick?: (slug: string) => void;
  variant?: "grid" | "list";
}

export default function ArticleCard({
  title,
  description,
  imageUrl,
  category,
  author,
  date,
  slug,
  onClick,
  variant = "grid",
}: ArticleCardProps) {
  if (variant === "list") {
    return (
      <Card 
        className="overflow-hidden hover-elevate cursor-pointer border-card-border"
        onClick={() => onClick?.(slug)}
        data-testid={`card-article-${slug}`}
      >
        <CardContent className="p-0">
          <div className="flex gap-4">
            <div className="w-32 h-24 flex-shrink-0 bg-muted overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                data-testid={`img-article-${slug}`}
              />
            </div>
            <div className="flex-1 py-3 pr-3 min-w-0">
              <Badge variant="secondary" className="mb-2 text-xs">
                {category}
              </Badge>
              <h3 className="font-semibold text-sm line-clamp-2 mb-1" data-testid={`text-article-title-${slug}`}>
                {title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className="overflow-hidden hover-elevate cursor-pointer transition-transform hover:scale-[1.02] border-card-border"
      onClick={() => onClick?.(slug)}
      data-testid={`card-article-${slug}`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-article-${slug}`}
          />
          <Badge className="absolute top-3 left-3">
            {category}
          </Badge>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight" data-testid={`text-article-title-${slug}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
            {author && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{author}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
