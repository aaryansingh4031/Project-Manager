import express from "express";

import authRoutes from "./auth.js";
import userRoutes from "./user.js";


const router  = express.Router()

router.use("/auth", authRoutes);

export default router;