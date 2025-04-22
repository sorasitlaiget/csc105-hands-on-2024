import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}
const updateComplete = async (id: number) => {
    const updatedTodo = await db.todo.update({
        where: { id },
        data: { completed: true },
    });
    return updatedTodo;
};
const updateTitle = async (id: number, newTitle: string) => {
    const updatedTodo = await db.todo.update({
        where: { id },
        data: { title: newTitle },
    });
    return updatedTodo;
};
const getAllTodo = async (userId: number) => {
    const todos = await db.todo.findMany({ where: { userId } });
    return todos;
};

export { createTodo , getTodo,updateComplete,updateTitle,getAllTodo};