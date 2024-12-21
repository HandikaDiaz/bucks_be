import { Router } from "express";
import * as profileContoller from "../../controllers/profile-controller";
import { authentication } from "../../middlewares/authtentication";

const profileRouter = Router();

profileRouter.get('/get', authentication, profileContoller.getProfile);

export default profileRouter;