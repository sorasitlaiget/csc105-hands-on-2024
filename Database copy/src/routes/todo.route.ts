import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/get", todoController.getTodo);
todoRouter.patch("/:id/complete", todoController.updateComplete);
todoRouter.patch("/:id/updateTitle", todoController.updateTitle);
todoRouter.get("/user/:id", todoController.getAllTodo);

export { todoRouter };