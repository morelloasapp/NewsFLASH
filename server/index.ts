import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 Exemplu de endpoint
app.get("/", (req, res) => {
  res.json({
    message: "✅ API-ul Express rulează corect!",
    mode: process.env.NODE_ENV,
  });
});

// 🔹 Alte rute de API pot fi adăugate aici
// app.use("/api/users", usersRouter);

// 🔹 Pornește serverul
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Serverul rulează pe http://localhost:${PORT}`);
});


      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
