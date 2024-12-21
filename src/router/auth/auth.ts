import { Router } from "express";
import * as authContoller from "../../controllers/auth-controller";

const authRouter = Router();

authRouter.post('/register', authContoller.Register);
authRouter.post('/login', authContoller.Login);
authRouter.post("/logout", authContoller.Logout);

export default authRouter;