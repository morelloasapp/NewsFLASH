import TrendingSidebar from '../TrendingSidebar';
import healthImage from '@assets/generated_images/Healthcare_professionals_scene_b6c9aefa.png';
import politicalImage from '@assets/generated_images/Political_press_conference_scene_f52678c1.png';
import coastalImage from '@assets/generated_images/Constanța_coastal_sunset_view_47d78805.png';

export default function TrendingSidebarExample() {
  const mockArticles = [
    {
      id: '1',
      title: 'Noi Facilități Medicale Inaugurate în Oraș',
      imageUrl: healthImage,
      category: 'Sănătate',
      date: '2 Nov 2024',
      slug: 'facilitati-medicale',
    },
    {
      id: '2',
      title: 'Declarații Importante la Conferința de Presă',
      imageUrl: politicalImage,
      category: 'Politică',
      date: '2 Nov 2024',
      slug: 'conferinta-presa',
    },
    {
      id: '3',
      title: 'Litoral: Sezonul Turistic Depășește Așteptările',
      imageUrl: coastalImage,
      category: 'Turism',
      date: '1 Nov 2024',
      slug: 'sezon-turistic',
    },
  ];

  return (
    <div className="p-6 bg-background max-w-sm">
      <TrendingSidebar 
        articles={mockArticles}
        onArticleClick={(slug) => console.log('Trending article clicked:', slug)}
      />
    </div>
  );
}
