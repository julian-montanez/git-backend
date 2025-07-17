import { Router } from "express";
import userControler from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/sign-up", userControler.create)

userRouter.post("/log-in", userControler.loginUser)

userRouter.get("/", userControler.readAll)

userRouter.get("/:id", userControler.readOne)

export default userRouter;