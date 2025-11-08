import ArticleCard from '../ArticleCard';
import articleImage from '@assets/generated_images/Sports_stadium_celebration_12caae0c.png';

export default function ArticleCardExample() {
  return (
    <div className="grid gap-6 md:grid-cols-2 p-6 bg-background">
      <div>
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">Grid Variant</h3>
        <ArticleCard
          title="Victorie Spectaculoasă: Echipa Locală Câștigă Finala"
          description="Mii de fani au celebrat victoria echipei în fața adversarilor tradiționali într-un meci plin de emoții."
          imageUrl={articleImage}
          category="Sport"
          author="Ion Popescu"
          date="2 Nov 2024"
          slug="victorie-echipa-locala"
          onClick={(slug) => console.log('Article clicked:', slug)}
          variant="grid"
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">List Variant</h3>
        <div className="space-y-3">
          <ArticleCard
            title="Victorie Spectaculoasă: Echipa Locală Câștigă Finala"
            description="Mii de fani au celebrat victoria."
            imageUrl={articleImage}
            category="Sport"
            date="2 Nov 2024"
            slug="victorie-1"
            onClick={(slug) => console.log('Article clicked:', slug)}
            variant="list"
          />
          <ArticleCard
            title="Noi Investiții în Infrastructura Sportivă"
            description="Primăria anunță modernizarea stadionului."
            imageUrl={articleImage}
            category="Sport"
            date="1 Nov 2024"
            slug="investitii-sport"
            onClick={(slug) => console.log('Article clicked:', slug)}
            variant="list"
          />
        </div>
      </div>
    </div>
  );
}
