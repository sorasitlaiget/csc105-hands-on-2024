import { db } from "../index.ts";

const GetTodo = async () => {
  const todo = await db.todo.findMany({
  });
  return todo;
};

const AddTodo = async (name: string) => {
  const todo = await db.todo.create({
    data: { name},
  });
  return todo;
};

const EditTodo = async (id: number, name: string) => {
  const updatedTodo = await db.todo.update({
    where: { id },
    data: { name: name },
  });
  return updatedTodo;
};

const SuccessTodo = async (id: number) => {
  const currentTodo = await db.todo.findUnique({
    where: { id },
  });

  if (!currentTodo) {
    throw new Error("Todo not found");
  }
  
  const updatedTodo = await db.todo.update({
    where: { id },
    data: { success: !currentTodo.success }, // สลับค่าจากเดิม
  });

  return updatedTodo;
};


const DeleteTodo = async (id: number) => {
  const deletedTodo = await db.todo.delete({
    where: { id },
  });
  return deletedTodo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
