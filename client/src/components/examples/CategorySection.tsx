import CategorySection from '../CategorySection';
import sportsImage from '@assets/generated_images/Sports_stadium_celebration_12caae0c.png';
import techImage from '@assets/generated_images/Tech_startup_workspace_64baee43.png';
import cultureImage from '@assets/generated_images/Cultural_heritage_festival_afa2b668.png';

export default function CategorySectionExample() {
  const mockArticles = [
    {
      id: '1',
      title: 'Echipa Națională Se Pregătește pentru Marele Meci',
      description: 'Antrenamentele intense continuă în vederea competiției internaționale care se apropie.',
      imageUrl: sportsImage,
      slug: 'echipa-nationala-pregatire',
      author: 'Maria Ionescu',
      date: '2 Nov 2024',
    },
    {
      id: '2',
      title: 'Startup-uri Locale Atrag Investiții Importante',
      description: 'Companiile tech din regiune primesc finanțare de la investitori europeni.',
      imageUrl: techImage,
      slug: 'startup-investitii',
      author: 'Alex Popa',
      date: '1 Nov 2024',
    },
    {
      id: '3',
      title: 'Festival Cultural Adună Mii de Vizitatori',
      description: 'Evenimentul anual celebrează tradițiile și meșteșugurile locale.',
      imageUrl: cultureImage,
      slug: 'festival-cultural',
      author: 'Elena Dumitrescu',
      date: '31 Oct 2024',
    },
  ];

  return (
    <div className="p-6 bg-background">
      <CategorySection
        title="Sport"
        articles={mockArticles}
        categorySlug="sport"
        onArticleClick={(slug) => console.log('Article clicked:', slug)}
      />
    </div>
  );
}
