import { useRoute, Link } from "wouter";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@shared/config";

import mayorImage from '@assets/generated_images/Mayor_arrest_news_photo_fe21f96f.png';
import politicalImage from '@assets/generated_images/Political_press_conference_scene_f52678c1.png';
import sportsImage from '@assets/generated_images/Sports_stadium_celebration_12caae0c.png';

const articlesData: Record<string, {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  content: string;
}> = {
  'primar-mangalia-arestat': {
    title: 'Primarul Municipiului Mangalia, Reținut de DNA pentru Corupție',
    description: 'Edilul municipiului Mangalia a fost reținut pentru 24 de ore de procurorii DNA într-un dosar de corupție privind atribuirea ilegală de contracte publice.',
    imageUrl: mayorImage,
    category: 'Politică',
    author: 'Andrei Marinescu',
    date: '8 Noiembrie 2024',
    content: `
      <p class="text-lg leading-relaxed mb-6">Primarul municipiului Mangalia a fost reținut miercuri, 6 noiembrie, de procurorii Direcției Naționale Anticorupție (DNA) pentru 24 de ore, fiind acuzat de trafic de influență și luare de mită în legătură cu atribuirea unor contracte publice importante pentru oraș.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Detalii despre Acuzații</h2>
      <p class="leading-relaxed mb-4">Potrivit surselor judiciare, edilul este acuzat că ar fi primit sume importante de bani și alte foloase necuvenite în schimbul facilitării câștigării unor licitații publice pentru lucrări de modernizare a infrastructurii urbane. Prejudiciul estimat se ridică la aproximativ 2 milioane de euro.</p>

      <p class="leading-relaxed mb-4">Anchetatorii susțin că primarul ar fi intervenit direct în procesul de atribuire a contractelor, favorizând anumite companii în dauna altora, încălcând astfel principiile transparenței și concurenței loiale în achiziții publice.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Percheziții și Descinderi</h2>
      <p class="leading-relaxed mb-4">În cadrul anchetei, procurorii DNA au efectuat miercuri dimineață percheziții la Primăria Mangalia, la sediile mai multor firme implicate și la domiciliul primarului. Au fost ridicate documente, contracte și echipamente electronice care vor fi analizate în continuare.</p>

      <p class="leading-relaxed mb-4">Potrivit martorilor, descinderea la sediul primăriei a durat mai multe ore, iar angajații au fost rugați să coopereze cu anchetatorii și să furnizeze toate documentele solicitate.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Reacții din Partea Autorităților Locale</h2>
      <p class="leading-relaxed mb-4">Viceprimarul municipiului Mangalia a declarat într-o conferință de presă că activitatea administrației locale va continua în mod normal, asigurând cetățenii că serviciile publice nu vor fi afectate de această situație.</p>

      <p class="leading-relaxed mb-4">"Suntem șocați de aceste acuzații. Vom respecta procedurile legale și vom coopera pe deplin cu autoritățile pentru a clarifica această situație", a declarat viceprimarul.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Context și Evoluții Anterioare</h2>
      <p class="leading-relaxed mb-4">Primarul Mangaliei se afla la al doilea mandat, fiind ales cu un scor confortabil în alegerile locale din 2020. În ultimii ani, municipiul a cunoscut o dezvoltare accelerată, cu numeroase proiecte de modernizare a infrastructurii și atragere de investiții în zona turistică.</p>

      <p class="leading-relaxed mb-4">Însă în ultimele luni, mai multe ONG-uri locale au semnalat nereguli în atribuirea contractelor publice și au solicitat autorităților competente să verifice legalitatea procedurilor de achiziții.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Urmările Juridice</h2>
      <p class="leading-relaxed mb-4">După cele 24 de ore de reținere, procurorii vor putea solicita arestarea preventivă a primarului sau aplicarea unor măsuri preventive mai ușoate, cum ar fi controlul judiciar sau controlul judiciar pe cauțiune.</p>

      <p class="leading-relaxed mb-4">Dacă va fi găsit vinovat, primarul riscă o pedeapsă cu închisoarea de până la 15 ani, conform legislației în vigoare privind infracțiunile de corupție.</p>

      <p class="leading-relaxed mt-8 text-muted-foreground italic">Vom reveni cu detalii pe măsură ce ancheta avansează.</p>
    `,
  },
  'conferinta-masuri-economice': {
    title: 'Conferință de Presă: Noi Măsuri Economice Anunțate de Guvern',
    description: 'Premierul a prezentat astăzi pachetul de măsuri economice care va fi implementat în următoarele 6 luni pentru susținerea mediului de afaceri.',
    imageUrl: politicalImage,
    category: 'Economic',
    author: 'Maria Ionescu',
    date: '7 Noiembrie 2024',
    content: `
      <p class="text-lg leading-relaxed mb-6">Guvernul României a anunțat astăzi un pachet amplu de măsuri economice destinate să susțină mediul de afaceri și să stimuleze creșterea economică în contextul provocărilor actuale.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Principalele Măsuri Anunțate</h2>
      <p class="leading-relaxed mb-4">Premierul a prezentat un plan în mai multe etape care include reduceri fiscale pentru IMM-uri, facilități de creditare pentru antreprenori și investiții semnificative în infrastructură.</p>

      <p class="leading-relaxed mb-4">Măsurile vor intra în vigoare începând cu 1 ianuarie 2025 și vor fi implementate treptat pe parcursul primului semestru al anului viitor.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Impact Asupra Economiei</h2>
      <p class="leading-relaxed mb-4">Experții economici estimează că aceste măsuri ar putea genera o creștere economică de aproximativ 4% în anul 2025, iar numărul locurilor de muncă noi create ar putea ajunge la 100.000.</p>

      <p class="leading-relaxed mb-4">Businessul românesc a reacționat pozitiv la anunțuri, reprezentanții patronatelor declarând că pașii făcuți de guvern merg în direcția corectă.</p>
    `,
  },
  'victorie-echipa-locala': {
    title: 'Victorie Spectaculoasă: Echipa Locală Câștigă Finala',
    description: 'Mii de fani au celebrat victoria echipei în fața adversarilor tradiționali într-un meci plin de emoții.',
    imageUrl: sportsImage,
    category: 'Sport',
    author: 'Ion Popescu',
    date: '7 Noiembrie 2024',
    content: `
      <p class="text-lg leading-relaxed mb-6">Într-un meci plin de suspans și emoții, echipa locală a reușit să câștige finala campionatului național cu scorul de 3-2, în fața a peste 30.000 de spectatori entuziasmați.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Desfășurarea Meciului</h2>
      <p class="leading-relaxed mb-4">Meciul a fost extrem de echilibrat, cu golul decisiv marcat în minutul 89 de către căpitanul echipei, care a devenit eroul serii.</p>

      <p class="leading-relaxed mb-4">Atmosfera de pe stadion a fost electrizantă, fanii creând un spectacol de lumini și culoare care a impresionat chiar și adversarii.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Declarații După Meci</h2>
      <p class="leading-relaxed mb-4">Antrenorul echipei a declarat că aceasta este cea mai mare realizare a carierei sale și că jucătorii au demonstrat un caracter excepțional.</p>

      <p class="leading-relaxed mb-4">Primarul orașului a anunțat că echipa va fi primită oficial la Primărie și că jucătorii vor primi recunoașterea pe care o merită.</p>
    `,
  },
};

export default function ArticlePage() {
  const [, params] = useRoute("/article/:slug");
  const slug = params?.slug || '';
  
  const article = articlesData[slug];

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

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header categories={categories} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Articol negăsit</h1>
          <Link href="/">
            <Button>Înapoi la pagina principală</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header categories={categories} />

      <article className="container mx-auto px-4 lg:px-6 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
            Înapoi
          </Button>
        </Link>

        <Badge className="mb-4">{article.category}</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-testid="text-article-title">
          {article.title}
        </h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
        </div>

        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full aspect-video object-cover rounded-lg mb-8 shadow-lg"
          data-testid="img-article-hero"
        />

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          data-testid="content-article-body"
        />
      </article>

      <WhatsAppButton link={siteConfig.whatsappLink} />
    </div>
  );
}
