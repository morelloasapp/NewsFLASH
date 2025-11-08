import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  author?: string;
  date: string;
}

interface CategorySectionProps {
  title: string;
  articles: Article[];
  categorySlug: string;
  onArticleClick?: (slug: string) => void;
}

export default function CategorySection({
  title,
  articles,
  categorySlug,
  onArticleClick,
}: CategorySectionProps) {
  return (
    <section className="space-y-6" data-testid={`section-category-${categorySlug}`}>
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl md:text-3xl font-bold" data-testid={`text-category-title-${categorySlug}`}>
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            category={title}
            author={article.author}
            date={article.date}
            slug={article.slug}
            onClick={onArticleClick}
            variant="grid"
          />
        ))}
      </div>
    </section>
  );
}
