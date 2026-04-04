import express from "express";
import path from "path";
import connectDB from "./lib/db.js";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import codeRoutes from "./routes/codeRoutes.js"; // 1. IMPORT YOUR NEW ROUTE
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/innjest.js";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./lib/env.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const __dirname = path.resolve();

app.use(clerkMiddleware());
app.use(express.json()); 
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/code", codeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "This is the health check endpoint" });
});

app.get("/video-call", protectRoute, (req, res) => {
  res.status(200).json({ msg: "This is the video call endpoint" });
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server running on", ENV.PORT);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();