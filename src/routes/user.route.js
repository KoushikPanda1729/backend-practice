import { Router } from "express";

const userRouter = Router();


userRouter.route("/register").post((req, res) => {
    res.status(200).json({
        message: "user regiser successfully"
    })
})

export default userRouter;