import HeroCarousel from '../HeroCarousel';
import heroImage1 from '@assets/generated_images/Breaking_news_street_scene_054f8602.png';
import heroImage2 from '@assets/generated_images/Political_press_conference_scene_f52678c1.png';
import heroImage3 from '@assets/generated_images/Business_district_cityscape_a57ddaef.png';

export default function HeroCarouselExample() {
  const mockSlides = [
    {
      id: '1',
      title: 'Eveniment Major în Centrul Orașului: Autoritățile Reacționează Imediat',
      description: 'Forțele de ordine au intervenit rapid după incidentul din zona centrală. Situația este sub control, iar traficul a fost deviat pe rute alternative.',
      imageUrl: heroImage1,
      slug: 'eveniment-major-centru',
    },
    {
      id: '2',
      title: 'Conferință de Presă: Noi Măsuri Economice Anunțate de Guvern',
      description: 'Premierul a prezentat astăzi pachetul de măsuri economice care va fi implementat în următoarele 6 luni pentru susținerea mediului de afaceri.',
      imageUrl: heroImage2,
      slug: 'conferinta-masuri-economice',
    },
    {
      id: '3',
      title: 'Dezvoltare Urbană: Noul District de Afaceri Prinde Viață',
      description: 'Proiectul de modernizare a zonei de business atrage investiții importante și creează mii de locuri de muncă pentru comunitatea locală.',
      imageUrl: heroImage3,
      slug: 'dezvoltare-district-afaceri',
    },
  ];

  return (
    <HeroCarousel 
      slides={mockSlides}
      onReadMore={(slug) => console.log('Read more:', slug)}
    />
  );
}
