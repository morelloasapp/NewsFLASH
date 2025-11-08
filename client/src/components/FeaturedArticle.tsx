import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface FeaturedArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  onClick?: (slug: string) => void;
}

export default function FeaturedArticle({
  title,
  description,
  imageUrl,
  category,
  author,
  date,
  slug,
  onClick,
}: FeaturedArticleProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate cursor-pointer border-card-border"
      onClick={() => onClick?.(slug)}
      data-testid={`card-featured-${slug}`}
    >
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video md:aspect-square bg-muted overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              data-testid={`img-featured-${slug}`}
            />
            <Badge className="absolute top-4 left-4">
              {category}
            </Badge>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight" data-testid={`text-featured-title-${slug}`}>
              {title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
