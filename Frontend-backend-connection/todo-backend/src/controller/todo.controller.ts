import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
    const todo = await todoModel.GetTodo();
    return c.json({
      success: true,
      data: todo,
      msg: "Get todo success",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { name } = body;
    const todo = await todoModel.AddTodo(name);
    return c.json({
      success: true,
      data: todo,
      msg: "Add todo success",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodo = async (c: Context) => {
  try {
    const id = Number(c.req.param("id"));
    const body = await c.req.json();
    const { name } = body;
    const updatedTodo = await todoModel.EditTodo(id, name);
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Edit todo success",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const SuccessTodo = async (c: Context) => {
  try {
    const id = Number(c.req.param("id"));
    const updatedTodo = await todoModel.SuccessTodo(id);

    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Mark todo as completed success",
    });
  } catch (e) {
    if (e instanceof Error && e.message.includes("not found")) {
      return c.json(
        { success: false, data: null, msg: e.message },
        404
      );
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const id = Number(c.req.param("id"));
    const deletedTodo = await todoModel.DeleteTodo(id);
    return c.json({
      success: true,
      data: deletedTodo,
      msg: "Delete todo success",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};
export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
