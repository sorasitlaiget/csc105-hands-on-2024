import { Hono } from "hono";
import { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo } from "../controller/todo.controller.ts";

const todoRouter = new Hono();

todoRouter.get("/", GetTodo);
todoRouter.post("/add", AddTodo);
todoRouter.patch("/edit/:id", EditTodo);
todoRouter.patch("/success/:id", SuccessTodo);
todoRouter.delete("/delete/:id", DeleteTodo);

export default todoRouter;

