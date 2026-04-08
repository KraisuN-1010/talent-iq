import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { 
  createSession, 
  getActiveSessions, 
  getMyRecentSessions, 
  getSessionById, 
  joinSession, 
  endSession 
} from "../controllers/sessionController.js";

const router = express.Router();

// 1. STATIC ROUTES (Must come first)
router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/recent", protectRoute, getMyRecentSessions);

// 2. DYNAMIC ROUTES
router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession); 
router.post("/:id/end", protectRoute, endSession);

export default router;