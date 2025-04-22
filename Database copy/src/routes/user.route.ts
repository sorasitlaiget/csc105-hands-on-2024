import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/create", userController.createUser);
userRouter.get("/getAll", userController.getAllUsers);
userRouter.patch("/:id/updateName", userController.updateName);


export { userRouter };