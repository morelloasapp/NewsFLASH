import { useLocation } from "wouter";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FeaturedArticle from "@/components/FeaturedArticle";
import LiveUpdatesTimeline from "@/components/LiveUpdatesTimeline";
import CategorySection from "@/components/CategorySection";
import TrendingSidebar from "@/components/TrendingSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@shared/config";

import mayorImage from '@assets/generated_images/Mayor_arrest_news_photo_fe21f96f.png';
import politicalImage from '@assets/generated_images/Political_press_conference_scene_f52678c1.png';
import heroImage3 from '@assets/generated_images/Business_district_cityscape_a57ddaef.png';
import coastalImage from '@assets/generated_images/Constanța_coastal_sunset_view_47d78805.png';
import sportsImage from '@assets/generated_images/Sports_stadium_celebration_12caae0c.png';
import techImage from '@assets/generated_images/Tech_startup_workspace_64baee43.png';
import cultureImage from '@assets/generated_images/Cultural_heritage_festival_afa2b668.png';
import healthImage from '@assets/generated_images/Healthcare_professionals_scene_b6c9aefa.png';

export default function Home() {
  const [, setLocation] = useLocation();

  const categories = [
    { id: '1', name: 'Toate', slug: 'toate' },
    { id: '2', name: 'Administrație', slug: 'administratie' },
    { id: '3', name: 'Politică', slug: 'politica' },
    { id: '4', name: 'Social', slug: 'social' },
    { id: '5', name: 'Economie', slug: 'economie' },
    { id: '6', name: 'Evenimente', slug: 'evenimente' },
    { id: '7', name: 'Sport', slug: 'sport' },
    { id: '8', name: 'Cultură', slug: 'cultura' },
    { id: '9', name: 'Video', slug: 'video' },
    { id: '10', name: 'Anunțuri', slug: 'anunturi' },
  ];

  const heroSlides = [
    {
      id: '1',
      title: 'ULTIM MOMENT: Primarul Municipiului Mangalia, Reținut de DNA',
      description: 'Edilul municipiului Mangalia a fost reținut pentru 24 de ore de procurorii DNA într-un dosar de corupție privind atribuirea ilegală de contracte publice. Prejudiciul estimat se ridică la 2 milioane de euro.',
      imageUrl: mayorImage,
      slug: 'primar-mangalia-arestat',
    },
    {
      id: '2',
      title: 'Conferință de Presă: Noi Măsuri Economice Anunțate de Guvern',
      description: 'Premierul a prezentat astăzi pachetul de măsuri economice care va fi implementat în următoarele 6 luni pentru susținerea mediului de afaceri și stimularea creșterii economice.',
      imageUrl: politicalImage,
      slug: 'conferinta-masuri-economice',
    },
    {
      id: '3',
      title: 'Dezvoltare Urbană: Noul District de Afaceri Prinde Viață',
      description: 'Proiectul de modernizare a zonei de business atrage investiții importante și creează mii de locuri de muncă pentru comunitatea locală. Lucrările de infrastructură avansează conform planului.',
      imageUrl: heroImage3,
      slug: 'dezvoltare-district-afaceri',
    },
  ];

  const liveUpdates = [
    {
      id: '1',
      content: 'DNA confirmă: Primarul Mangaliei va fi prezentat judecătorului cu propunere de arestare preventivă. Procurorii au strâns probe suficiente pentru continuarea anchetei.',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      id: '2',
      content: 'Viceprimarul Mangaliei preia temporar atribuțiile de primar. Consiliul Local se reunește în ședință extraordinară pentru a gestiona situația.',
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    },
    {
      id: '3',
      content: 'Percheziții la Primăria Mangalia: Anchetatorii au ridicat documente și echipamente electronice. Mai multe persoane sunt audiate în calitate de martori.',
      timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    },
    {
      id: '4',
      content: 'Primarul municipiului Mangalia a fost reținut de procurorii DNA pentru 24 de ore în dosarul de corupție. Acuzațiile vizează trafic de influență și luare de mită.',
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    },
  ];

  const politicsArticles = [
    {
      id: '1',
      title: 'DNA Deschide Anchetă în Cazul Primarului Mangalia',
      description: 'Procurorii DNA investighează presupuse nereguli în atribuirea contractelor publice. Edilul este acuzat de corupție.',
      imageUrl: mayorImage,
      slug: 'primar-mangalia-arestat',
      author: 'Andrei Marinescu',
      date: '8 Nov 2024',
    },
    {
      id: '2',
      title: 'Măsuri Economice: Guvernul Anunță Pachet de Stimulente',
      description: 'Executivul pregătește un set de măsuri pentru susținerea mediului de afaceri românesc.',
      imageUrl: politicalImage,
      slug: 'conferinta-masuri-economice',
      author: 'Maria Ionescu',
      date: '7 Nov 2024',
    },
    {
      id: '3',
      title: 'Consiliul Local Constanța Aprobă Bugetul pentru 2025',
      description: 'Consilierii au votat în unanimitate bugetul municipiului pentru anul viitor.',
      imageUrl: politicalImage,
      slug: 'buget-constanta-2025',
      author: 'Alex Popa',
      date: '6 Nov 2024',
    },
  ];

  const sportArticles = [
    {
      id: '1',
      title: 'Victorie Spectaculoasă: Echipa Locală Câștigă Finala',
      description: 'Mii de fani au celebrat victoria echipei în fața adversarilor tradiționali într-un meci plin de emoții.',
      imageUrl: sportsImage,
      slug: 'victorie-echipa-locala',
      author: 'Ion Popescu',
      date: '7 Nov 2024',
    },
    {
      id: '2',
      title: 'Pregătiri Intense Pentru Competiția Europeană',
      description: 'Antrenorul a declarat că echipa este pregătită pentru provocările care urmează.',
      imageUrl: sportsImage,
      slug: 'pregatiri-competitie',
      author: 'Maria Ionescu',
      date: '6 Nov 2024',
    },
    {
      id: '3',
      title: 'Transfer Surpriză: Jucător Renumit Vine în Liga Locală',
      description: 'Fanii sunt entuziasmați de sosirea unui jucător cu experiență internațională.',
      imageUrl: sportsImage,
      slug: 'transfer-surpriza',
      author: 'Alex Popa',
      date: '5 Nov 2024',
    },
  ];

  const techArticles = [
    {
      id: '4',
      title: 'Startup-uri Locale Atrag Investiții Importante',
      description: 'Companiile tech din regiune primesc finanțare de la investitori europeni.',
      imageUrl: techImage,
      slug: 'startup-investitii',
      author: 'Alex Popa',
      date: '7 Nov 2024',
    },
    {
      id: '5',
      title: 'Noul Hub de Inovare Deschide Porțile',
      description: 'Spațiul modern oferă resurse și mentorat pentru antreprenori.',
      imageUrl: techImage,
      slug: 'hub-inovare',
      author: 'Diana Stan',
      date: '6 Nov 2024',
    },
    {
      id: '6',
      title: 'Conferință Internațională de Tehnologie la București',
      description: 'Experți din întreaga lume discută despre viitorul digitalizării.',
      imageUrl: techImage,
      slug: 'conferinta-tech',
      author: 'Mihai Radu',
      date: '5 Nov 2024',
    },
  ];

  const cultureArticles = [
    {
      id: '7',
      title: 'Festival Cultural Adună Mii de Vizitatori',
      description: 'Evenimentul anual celebrează tradițiile și meșteșugurile locale.',
      imageUrl: cultureImage,
      slug: 'festival-cultural',
      author: 'Elena Dumitrescu',
      date: '7 Nov 2024',
    },
    {
      id: '8',
      title: 'Expoziție de Artă Contemporană Se Inaugurează Mâine',
      description: 'Artiști locali și internaționali își prezintă lucrările în galeria centrală.',
      imageUrl: cultureImage,
      slug: 'expozitie-arta',
      author: 'Cristina Vasile',
      date: '6 Nov 2024',
    },
    {
      id: '9',
      title: 'Concert Simfonic în Aer Liber Atrage Publicul',
      description: 'Orchestra filarmonică oferă un spectacol gratuit în parcul orașului.',
      imageUrl: cultureImage,
      slug: 'concert-simfonic',
      author: 'Andrei Marinescu',
      date: '5 Nov 2024',
    },
  ];

  const trendingArticles = [
    {
      id: 't1',
      title: 'Primarul Mangaliei, Reținut de DNA',
      imageUrl: mayorImage,
      category: 'Politică',
      date: '8 Nov 2024',
      slug: 'primar-mangalia-arestat',
    },
    {
      id: 't2',
      title: 'Noi Facilități Medicale Inaugurate în Oraș',
      imageUrl: healthImage,
      category: 'Sănătate',
      date: '7 Nov 2024',
      slug: 'facilitati-medicale',
    },
    {
      id: 't3',
      title: 'Litoral: Sezonul Turistic Depășește Așteptările',
      imageUrl: coastalImage,
      category: 'Turism',
      date: '6 Nov 2024',
      slug: 'sezon-turistic',
    },
    {
      id: 't4',
      title: 'Victorie Dramatică în Ultima Secundă',
      imageUrl: sportsImage,
      category: 'Sport',
      date: '7 Nov 2024',
      slug: 'victorie-echipa-locala',
    },
  ];

  const handleArticleClick = (slug: string) => {
    setLocation(`/article/${slug}`);
  };

  const handleCategoryClick = (slug: string) => {
    if (slug === 'toate') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(`category-${slug}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header categories={categories} onCategoryClick={handleCategoryClick} />

      <main>
        <HeroCarousel slides={heroSlides} onReadMore={handleArticleClick} />

        <div className="container mx-auto px-4 lg:px-6 py-12 space-y-16">
          <YouTubeEmbed videoId={siteConfig.youtubeVideoId} title="Știri Live" />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="border-l-4 border-primary pl-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Actualitate Constanța</h2>
                </div>
                <FeaturedArticle
                  title="Investiții Record în Dezvoltarea Zonei Costiere"
                  description="Primăria anunță un plan ambițios de modernizare a promenadei și dezvoltare a infrastructurii turistice. Proiectul va transforma litoralul într-o destinație de top pentru turiști din întreaga Europă."
                  imageUrl={coastalImage}
                  category="Constanța"
                  author="Andrei Marinescu"
                  date="7 Noiembrie 2024"
                  slug="investitii-zona-costiera"
                  onClick={handleArticleClick}
                />
              </div>

              <LiveUpdatesTimeline 
                updates={liveUpdates} 
                title="Actualizări Live - Dosarul Primarului Mangalia"
              />
            </div>

            <div className="hidden lg:block">
              <TrendingSidebar 
                articles={trendingArticles}
                onArticleClick={handleArticleClick}
              />
            </div>
          </div>

          <div id="category-politica">
            <CategorySection
              title="Politică & Administrație"
              articles={politicsArticles}
              categorySlug="politica"
              onArticleClick={handleArticleClick}
            />
          </div>

          <div id="category-sport">
            <CategorySection
              title="Sport"
              articles={sportArticles}
              categorySlug="sport"
              onArticleClick={handleArticleClick}
            />
          </div>

          <div id="category-economie">
            <CategorySection
              title="Economie & Tehnologie"
              articles={techArticles}
              categorySlug="economie"
              onArticleClick={handleArticleClick}
            />
          </div>

          <div id="category-cultura">
            <CategorySection
              title="Cultură & Evenimente"
              articles={cultureArticles}
              categorySlug="cultura"
              onArticleClick={handleArticleClick}
            />
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-card-border mt-16">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 {siteConfig.siteName}. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton link={siteConfig.whatsappLink} />
    </div>
  );
}
