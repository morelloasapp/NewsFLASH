import FeaturedArticle from '../FeaturedArticle';
import coastalImage from '@assets/generated_images/Constanța_coastal_sunset_view_47d78805.png';

export default function FeaturedArticleExample() {
  return (
    <div className="p-6 bg-background">
      <FeaturedArticle
        title="Constanța: Investiții Record în Dezvoltarea Zonei Costiere"
        description="Primăria anunță un plan ambițios de modernizare a promenadei și dezvoltare a infrastructurii turistice. Proiectul va transforma litoralul într-o destinație de top pentru turiști din întreaga Europă."
        imageUrl={coastalImage}
        category="Constanța"
        author="Andrei Marinescu"
        date="2 Noiembrie 2024"
        slug="investitii-zona-costiera"
        onClick={(slug) => console.log('Featured article clicked:', slug)}
      />
    </div>
  );
}
