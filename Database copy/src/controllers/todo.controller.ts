import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import { todo } from "node:test";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};
const updateComplete = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) {
            return c.json(
                { success: false, msg: "Invalid ID", data: null },
                400
            );
        }

        const updated = await todoModel.updateComplete(id);
        return c.json({
            success: true,
            msg: "Todo marked as complete",
            data: updated,
        });
    } catch (e) {
        return c.json(
            { success: false, data: null, msg: `${e}` },
            500
        );
    }
};
const getAllTodo = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) {
            return c.json(
                { success: false, msg: "Invalid ID", data: null },
                400
            );
        }

        const todos = await todoModel.getAllTodo(id);
        return c.json({
            success: true,
            data: todos,
            msg: "All todos for user",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const updateTitle = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		if (isNaN(id)) {
			return c.json(
				{ success: false, msg: "Invalid ID", data: null },
				400
			);
		}

		const body = await c.req.json<{ title: string }>();
		if (!body.title) {
			return c.json(
				{ success: false, msg: "Missing title", data: null },
				400
			);
		}

		const updated = await todoModel.updateTitle(id, body.title);
		return c.json({
			success: true,
			msg: "Todo title updated",
			data: updated,
		});
	} catch (e) {
		return c.json(
			{ success: false, data: null, msg: `${e}` },
			500
		);
	}
};


export { createTodo , getTodo, updateComplete ,updateTitle,getAllTodo};