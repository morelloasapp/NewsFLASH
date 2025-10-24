import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Exemplu de endpoint
app.get("/", (req, res) => {
  res.json({
    message: "✅ API-ul Express rulează corect!",
    mode: process.env.NODE_ENV || "development",
  });
});

// Pornește serverul
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Serverul rulează pe http://localhost:${PORT}`);
});

  });
})();
