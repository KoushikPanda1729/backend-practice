import { Router } from "express";
import registerController from "../controllers/user.controller.js";

const userRouter = Router();


userRouter.route("/register").post(registerController)

export default userRouter;