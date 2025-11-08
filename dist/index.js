// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  articles;
  constructor() {
    this.articles = /* @__PURE__ */ new Map();
    this.seedArticles();
  }
  seedArticles() {
    const seedData = [
      {
        title: "Primarul din Mangalia, arestat preventiv pentru corup\u021Bie",
        slug: "primar-mangalia-arestat",
        category: "Politica",
        summary: "Edilul ora\u0219ului Mangalia a fost re\u021Binut de DNA pentru acuza\u021Bii grave de corup\u021Bie \u0219i abuz \xEEn serviciu. Ancheta vizeaz\u0103 contracte publice suspecte \xEEn valoare de peste 10 milioane de euro.",
        content: "Primarul municipiului Mangalia a fost arestat preventiv pentru 30 de zile \xEEntr-un dosar de corup\u021Bie instrumentat de DNA Constan\u021Ba. Potrivit anchetatorilor, edilul ar fi primit mit\u0103 \xEEn schimbul atribuirii ilegale a unor contracte publice. Perchezi\u021Biile efectuate la prim\u0103rie \u0219i la domiciliul primarului au dus la ridicarea mai multor documente compromitatoare \u0219i a unei sume importante de bani.",
        imageUrl: "/attached_assets/stock_images/romanian_government__606831b4.jpg",
        author: "Redac\u021Bia Callatis Press",
        isFeatured: "true",
        videoUrl: null
      },
      {
        title: "Investi\u021Bii majore \xEEn portul Constan\u021Ba: modernizare de 500 milioane euro",
        slug: "investitii-port-constanta",
        category: "Economie",
        summary: "Portul Constan\u021Ba va beneficia de o modernizare ampl\u0103, finan\u021Bat\u0103 din fonduri europene \u0219i investi\u021Bii private. Lucr\u0103rile vor \xEEncepe \xEEn prim\u0103vara acestui an.",
        content: "Portul Constan\u021Ba, cel mai mare de la Marea Neagr\u0103, va beneficia de investi\u021Bii record pentru modernizare \u0219i extindere. Proiectul include modernizarea a 5 terminale, dragarea canalelor de acces \u0219i instalarea de echipamente moderne de manipulare a containerelor.",
        imageUrl: "/attached_assets/stock_images/business_economy_con_cd6b1c8f.jpg",
        author: "Ion Popescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "FC Viitorul Constan\u021Ba c\xE2\u0219tig\u0103 derby-ul local cu scor de neprezentare",
        slug: "viitorul-victorie",
        category: "Sport",
        summary: "Echipa const\u0103n\u021Bean\u0103 s-a impus categoric \xEEn fa\u021Ba rivalei locale cu 4-1, asigur\xE2ndu-\u0219i locul \xEEn top 3 al clasamentului.",
        content: "FC Viitorul a dominat categoric partida de asear\u0103 de pe stadionul Viitorul, \xEEnscriind 4 goluri spectaculoase. Juc\u0103torii antrena\u021Bi de Gheorghe Hagi au oferit o demonstra\u021Bie de fotbal, deloc surprinz\u0103tor pentru fanii echipei.",
        imageUrl: "/attached_assets/stock_images/sports_soccer_footba_5ee6825c.jpg",
        author: "Maria Ionescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Festival de muzic\u0103 \u0219i arte tradi\u021Bionale la Mamaia",
        slug: "festival-mamaia",
        category: "Cultura",
        summary: "Festivalul adun\u0103 arti\u0219ti din \xEEntreaga regiune pentru o s\u0103rb\u0103toare a culturii dobrogene. Evenimentul va avea loc \xEEn weekend.",
        content: "\xCEncep\xE2nd cu weekend-ul viitor, Mamaia va g\u0103zdui cel mai mare festival de muzic\u0103 tradi\u021Bional\u0103 din regiune. Peste 50 de forma\u021Bii din Rom\xE2nia \u0219i \u021B\u0103rile vecine vor prezenta tradi\u021Bii culturale dobrogene.",
        imageUrl: "/attached_assets/stock_images/cultural_event_festi_e2ffe8c0.jpg",
        author: "Ana Marinescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Noi m\u0103suri de siguran\u021B\u0103 pe plajele din Constan\u021Ba",
        slug: "siguranta-plaje",
        category: "Social",
        summary: "Autorit\u0103\u021Bile locale anun\u021B\u0103 instalarea de camere de supraveghere \u0219i cre\u0219terea num\u0103rului de salvamari pentru sezonul estival.",
        content: "Pentru sezonul estival urm\u0103tor, Prim\u0103ria Constan\u021Ba a alocat fonduri suplimentare pentru siguran\u021Ba turi\u0219tilor. Vor fi instalate 50 de camere de supraveghere pe plajele din Mamaia \u0219i Constan\u021Ba \u0219i vor fi angaja\u021Bi 30 de salvamari suplimentari.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Redac\u021Bia Callatis Press",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Consiliul Local Constan\u021Ba dezbate bugetul pe 2025",
        slug: "buget-constanta-2025",
        category: "Administratie",
        summary: "\u0218edin\u021Ba extraordinar\u0103 convocat\u0103 pentru aprobarea bugetului municipal va avea loc s\u0103pt\u0103m\xE2na viitoare. Bugetul propus este de 2,3 miliarde lei.",
        content: "Consilierii locali se vor \xEEntruni \xEEn \u0219edin\u021B\u0103 extraordinar\u0103 pentru dezbaterea \u0219i votarea bugetului Constan\u021Bei pe anul 2025. Principalele investi\u021Bii vizeaz\u0103 infrastructura rutier\u0103 \u0219i modernizarea transportului public.",
        imageUrl: "/attached_assets/stock_images/romanian_local_gover_b3b92286.jpg",
        author: "Gheorghe Dumitrescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Trafic restric\u021Bionat \xEEn zona central\u0103 din cauza lucr\u0103rilor",
        slug: "trafic-restrictionat",
        category: "Social",
        summary: "Lucr\u0103rile de modernizare a str\u0103zilor vor afecta circula\u021Bia timp de dou\u0103 s\u0103pt\u0103m\xE2ni. Autorit\u0103\u021Bile recomand\u0103 rute alternative.",
        content: "Autorit\u0103\u021Bile locale anun\u021B\u0103 restric\u021Bii de trafic \xEEn zona central\u0103 a ora\u0219ului din cauza lucr\u0103rilor de modernizare. \u0218oferii sunt \xEEndemna\u021Bi s\u0103 foloseasc\u0103 rutele ocolitoare indicate prin semnalizare.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Redac\u021Bia Callatis Press",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Turneu interna\u021Bional de \u0219ah organizat la Constan\u021Ba",
        slug: "turneu-sah",
        category: "Sport",
        summary: "Juc\u0103tori din 15 \u021B\u0103ri \xEE\u0219i disput\u0103 titlul la turneul de \u0219ah rapid organizat la Constan\u021Ba. Premiul total dep\u0103\u0219e\u0219te 50.000 de euro.",
        content: "Turneul interna\u021Bional de \u0219ah desf\u0103\u0219urat la Constan\u021Ba a atras mari mae\u0219tri din toat\u0103 Europa. Competi\u021Bia se va \xEEncheia duminic\u0103, c\xE2nd va fi desemnat c\xE2\u0219tig\u0103torul marelui premiu.",
        imageUrl: "/attached_assets/stock_images/sports_soccer_footba_5ee6825c.jpg",
        author: "Maria Ionescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Noi spa\u021Bii verzi amenajate \xEEn cartierele din Constan\u021Ba",
        slug: "spatii-verzi",
        category: "Administratie",
        summary: "Prim\u0103ria modernizeaz\u0103 parcurile existente \u0219i creeaz\u0103 noi zone de relaxare pentru residents.",
        content: "Autorit\u0103\u021Bile locale au demarat un amplu proiect de ecologizare urban\u0103, care prevede amenajarea a 10 noi parcuri \u0219i zone verzi \xEEn cartierele deficitare.",
        imageUrl: "/attached_assets/stock_images/constanta_romania_bl_191ba252.jpg",
        author: "Ana Marinescu",
        isFeatured: "false",
        videoUrl: null
      },
      {
        title: "Expozi\u021Bie de art\u0103 contemporan\u0103 la Muzeul de Art\u0103 Constan\u021Ba",
        slug: "expozitie-arta",
        category: "Cultura",
        summary: "Lucr\u0103rile a 20 de arti\u0219ti contemporani rom\xE2ni pot fi admirate p\xE2n\u0103 la sf\xE2r\u0219itul lunii.",
        content: "Muzeul de Art\u0103 din Constan\u021Ba g\u0103zduie\u0219te o expozi\u021Bie excep\u021Bional\u0103 de art\u0103 contemporan\u0103, reunind lucr\u0103ri ale celor mai aprecia\u021Bi arti\u0219ti rom\xE2ni ai momentului.",
        imageUrl: "/attached_assets/stock_images/cultural_event_festi_e2ffe8c0.jpg",
        author: "Gheorghe Dumitrescu",
        isFeatured: "false",
        videoUrl: null
      }
    ];
    seedData.forEach((data) => {
      const id = randomUUID();
      const article = {
        id,
        ...data,
        isFeatured: data.isFeatured || "false",
        videoUrl: data.videoUrl || null,
        publishedAt: /* @__PURE__ */ new Date()
      };
      this.articles.set(id, article);
    });
  }
  async getAllArticles() {
    return Array.from(this.articles.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }
  async getArticleById(id) {
    return this.articles.get(id);
  }
  async getArticlesByCategory(category) {
    return Array.from(this.articles.values()).filter((article) => article.category === category).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  async getFeaturedArticle() {
    return Array.from(this.articles.values()).find(
      (article) => article.isFeatured === "true"
    );
  }
  async createArticle(insertArticle) {
    const id = randomUUID();
    const article = {
      id,
      ...insertArticle,
      isFeatured: insertArticle.isFeatured || "false",
      videoUrl: insertArticle.videoUrl || null,
      publishedAt: /* @__PURE__ */ new Date()
    };
    this.articles.set(id, article);
    return article;
  }
  async searchArticles(query) {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.articles.values()).filter(
      (article) => article.title.toLowerCase().includes(lowerQuery) || article.summary.toLowerCase().includes(lowerQuery) || article.content.toLowerCase().includes(lowerQuery)
    ).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var articles = pgTable("articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  author: text("author").notNull(),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  isFeatured: text("is_featured").notNull().default("false"),
  videoUrl: text("video_url")
});
var insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  publishedAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/articles", async (req, res) => {
    try {
      const category = req.query.category;
      if (category && category !== "all") {
        const articles3 = await storage.getArticlesByCategory(category);
        return res.json(articles3);
      }
      const articles2 = await storage.getAllArticles();
      res.json(articles2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });
  app2.get("/api/articles/featured", async (req, res) => {
    try {
      const article = await storage.getFeaturedArticle();
      if (!article) {
        return res.status(404).json({ error: "No featured article found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured article" });
    }
  });
  app2.get("/api/articles/search", async (req, res) => {
    try {
      const query = req.query.q;
      if (!query) {
        return res.status(400).json({ error: "Search query is required" });
      }
      const articles2 = await storage.searchArticles(query);
      res.json(articles2);
    } catch (error) {
      res.status(500).json({ error: "Failed to search articles" });
    }
  });
  app2.get("/api/articles/:id", async (req, res) => {
    try {
      const article = await storage.getArticleById(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });
  app2.post("/api/articles", async (req, res) => {
    try {
      const validatedData = insertArticleSchema.parse(req.body);
      const article = await storage.createArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      res.status(400).json({ error: "Invalid article data" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
