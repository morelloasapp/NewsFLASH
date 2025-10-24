import { type Article, type InsertArticle } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllArticles(): Promise<Article[]>;
  getArticleById(id: string): Promise<Article | undefined>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  getFeaturedArticle(): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
  searchArticles(query: string): Promise<Article[]>;
}

export class MemStorage implements IStorage {
  private articles: Map<string, Article>;

  constructor() {
    this.articles = new Map();
    this.seedArticles();
  }

  private seedArticles() {
    const seedData: InsertArticle[] = [
      {
        title: "Primarul din Mangalia, arestat preventiv pentru corupție",
        slug: "primar-mangalia-arestat",
        category: "Politica",
        summary: "Edilul orașului Mangalia a fost reținut de DNA pentru acuzații grave de corupție și abuz în serviciu. Ancheta vizează contracte publice suspecte în valoare de peste 10 milioane de euro.",
        content: "Primarul municipiului Mangalia a fost arestat preventiv pentru 30 de zile într-un dosar de corupție instrumentat de DNA Constanța. Potrivit anchetatorilor, edilul ar fi primit mită în schimbul atribuirii ilegale a unor contracte publice. Perchezițiile efectuate la primărie și la domiciliul primarului au dus la ridicarea mai multor documente compromitatoare și a unei sume importante de bani.",
        imageUrl: "/attached_assets/stock_images/romanian_government__606831b4.jpg",
        author: "Redacția Callatis Press",
        isFeatured: "true",
        videoUrl: null,
      },
      {
        title: "Investiții majore în portul Constanța: modernizare de 500 milioane euro",
        slug: "investitii-port-constanta",
        category: "Economie",
        summary: "Portul Constanța va beneficia de o modernizare amplă, finanțată din fonduri europene și investiții private. Lucrările vor începe în primăvara acestui an.",
        content: "Portul Constanța, cel mai mare de la Marea Neagră, va beneficia de investiții record pentru modernizare și extindere. Proiectul include modernizarea a 5 terminale, dragarea canalelor de acces și instalarea de echipamente moderne de manipulare a containerelor.",
        imageUrl: "/attached_assets/stock_images/business_economy_con_cd6b1c8f.jpg",
        author: "Ion Popescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "FC Viitorul Constanța câștigă derby-ul local cu scor de neprezentare",
        slug: "viitorul-victorie",
        category: "Sport",
        summary: "Echipa constănțeană s-a impus categoric în fața rivalei locale cu 4-1, asigurându-și locul în top 3 al clasamentului.",
        content: "FC Viitorul a dominat categoric partida de aseară de pe stadionul Viitorul, înscriind 4 goluri spectaculoase. Jucătorii antrenați de Gheorghe Hagi au oferit o demonstrație de fotbal, deloc surprinzător pentru fanii echipei.",
        imageUrl: "/attached_assets/stock_images/sports_soccer_footba_5ee6825c.jpg",
        author: "Maria Ionescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Festival de muzică și arte tradiționale la Mamaia",
        slug: "festival-mamaia",
        category: "Cultura",
        summary: "Festivalul adună artiști din întreaga regiune pentru o sărbătoare a culturii dobrogene. Evenimentul va avea loc în weekend.",
        content: "Începând cu weekend-ul viitor, Mamaia va găzdui cel mai mare festival de muzică tradițională din regiune. Peste 50 de formații din România și țările vecine vor prezenta tradiții culturale dobrogene.",
        imageUrl: "/attached_assets/stock_images/cultural_event_festi_e2ffe8c0.jpg",
        author: "Ana Marinescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Noi măsuri de siguranță pe plajele din Constanța",
        slug: "siguranta-plaje",
        category: "Social",
        summary: "Autoritățile locale anunță instalarea de camere de supraveghere și creșterea numărului de salvamari pentru sezonul estival.",
        content: "Pentru sezonul estival următor, Primăria Constanța a alocat fonduri suplimentare pentru siguranța turiștilor. Vor fi instalate 50 de camere de supraveghere pe plajele din Mamaia și Constanța și vor fi angajați 30 de salvamari suplimentari.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Redacția Callatis Press",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Consiliul Local Constanța dezbate bugetul pe 2025",
        slug: "buget-constanta-2025",
        category: "Administratie",
        summary: "Ședința extraordinară convocată pentru aprobarea bugetului municipal va avea loc săptămâna viitoare. Bugetul propus este de 2,3 miliarde lei.",
        content: "Consilierii locali se vor întruni în ședință extraordinară pentru dezbaterea și votarea bugetului Constanței pe anul 2025. Principalele investiții vizează infrastructura rutieră și modernizarea transportului public.",
        imageUrl: "/attached_assets/stock_images/romanian_local_gover_b3b92286.jpg",
        author: "Gheorghe Dumitrescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Trafic restricționat în zona centrală din cauza lucrărilor",
        slug: "trafic-restrictionat",
        category: "Social",
        summary: "Lucrările de modernizare a străzilor vor afecta circulația timp de două săptămâni. Autoritățile recomandă rute alternative.",
        content: "Autoritățile locale anunță restricții de trafic în zona centrală a orașului din cauza lucrărilor de modernizare. Șoferii sunt îndemnați să folosească rutele ocolitoare indicate prin semnalizare.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Redacția Callatis Press",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Turneu internațional de șah organizat la Constanța",
        slug: "turneu-sah",
        category: "Sport",
        summary: "Jucători din 15 țări își dispută titlul la turneul de șah rapid organizat la Constanța. Premiul total depășește 50.000 de euro.",
        content: "Turneul internațional de șah desfășurat la Constanța a atras mari maeștri din toată Europa. Competiția se va încheia duminică, când va fi desemnat câștigătorul marelui premiu.",
        imageUrl: "/attached_assets/stock_images/sports_soccer_footba_5ee6825c.jpg",
        author: "Maria Ionescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Noi spații verzi amenajate în cartierele din Constanța",
        slug: "spatii-verzi",
        category: "Administratie",
        summary: "Primăria modernizează parcurile existente și creează noi zone de relaxare pentru residents.",
        content: "Autoritățile locale au demarat un amplu proiect de ecologizare urbană, care prevede amenajarea a 10 noi parcuri și zone verzi în cartierele deficitare.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Ana Marinescu",
        isFeatured: "false",
        videoUrl: null,
      },
      {
        title: "Expoziție de artă contemporană la Muzeul de Artă Constanța",
        slug: "expozitie-arta",
        category: "Cultura",
        summary: "Lucrările a 20 de artiști contemporani români pot fi admirate până la sfârșitul lunii.",
        content: "Muzeul de Artă din Constanța găzduiește o expoziție excepțională de artă contemporană, reunind lucrări ale celor mai apreciați artiști români ai momentului.",
        imageUrl: "/attached_assets/stock_images/cultural_event_festi_e2ffe8c0.jpg",
        author: "Gheorghe Dumitrescu",
        isFeatured: "false",
        videoUrl: null,
      },
    ];

    seedData.forEach(data => {
      const id = randomUUID();
      const article: Article = {
        id,
        ...data,
        isFeatured: data.isFeatured || "false",
        videoUrl: data.videoUrl || null,
        publishedAt: new Date(),
      };
      this.articles.set(id, article);
    });
  }

  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getArticleById(id: string): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.category === category)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getFeaturedArticle(): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      article => article.isFeatured === "true"
    );
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = randomUUID();
    const article: Article = {
      id,
      ...insertArticle,
      isFeatured: insertArticle.isFeatured || "false",
      videoUrl: insertArticle.videoUrl || null,
      publishedAt: new Date(),
    };
    this.articles.set(id, article);
    return article;
  }

  async searchArticles(query: string): Promise<Article[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.articles.values())
      .filter(article => 
        article.title.toLowerCase().includes(lowerQuery) ||
        article.summary.toLowerCase().includes(lowerQuery) ||
        article.content.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
}

export const storage = new MemStorage();
