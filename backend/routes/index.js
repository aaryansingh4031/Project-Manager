import express from "express";

import authRoutes from "./auth.js";
import workspaceRoutes from "./workspace.js";
import userRoutes from "./user.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/workspaces", workspaceRoutes);
router.use("/users", userRoutes);

export default router;