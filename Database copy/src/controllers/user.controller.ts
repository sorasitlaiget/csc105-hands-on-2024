import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
const getAllUsers = async (c: Context) => {
	try {
		const users = await userModel.getAllUsers();
		return c.json({
			success: true,
			data: users,
			msg: "all users",
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
const updateName = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) {
            return c.json(
                { success: false, msg: "Invalid ID", data: null },
                400
            );
        }

        const body = await c.req.json<{ firstName: string , lastName: string}>();
        if (!body.firstName || !body.lastName) {
            return c.json(
                { success: false, msg: "Missing firstName or lastName", data: null },
                400
            );
        }

      

        const updated = await userModel.updateName(id, body.firstName,body.lastName);
        return c.json({
            success: true,
            msg: "Name is updated",
            data: updated,
        });
    } catch (e) {
        return c.json(
            { success: false, data: null, msg: `${e}` },
            500
        );
    }
};

export { createUser,getAllUsers, updateName, };