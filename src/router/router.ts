import { Router } from "express";
import authRouter from "./auth/auth";
import productRouter from "./product/product";
import profileRouter from "./profile/profile";

const router = Router();

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/product', productRouter)

export default router;