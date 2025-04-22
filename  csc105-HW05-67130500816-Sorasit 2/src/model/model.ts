import type { CreateTodoInput, Todo, UpdateTodoInput } from "../type/type.js";

const todos: Todo[] = [
  { id: 1, title: "Todo-1", completed: false },
  { id: 2, title: "Todo-2", completed: false },
  { id: 3, title: "Todo-3", completed: false },
];

export function findAll(): Todo[] {
  return todos;
}

export function findById(id: number): Todo | undefined {

  return todos.find((todo) => todo.id === id)
}

export function create(input: CreateTodoInput): Todo {
  const newTodo: Todo = {
    id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
    title: input.title,
    completed: input.completed === true, 
  };

  todos.push(newTodo);
  return newTodo;
}

export function update(id: number, input: Todo): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return undefined;
  }

  const updatedTodo: Todo = {
    ...input,
    id, 
  };

  todos[index] = updatedTodo;
  return updatedTodo;
}

export function patch(id: number, input: UpdateTodoInput): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return undefined;
  }

  const updatedTodo: Todo = {
    ...todos[index],
    ...(input.title !== undefined && { title: input.title }),
    ...(input.completed !== undefined && { completed: input.completed }),
  };

  todos[index] = updatedTodo;
  return updatedTodo;
}

export function remove(id: number): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return undefined;

  const [deletedTodo] = todos.splice(index, 1);
  return deletedTodo;

}
export function findByCompleted(completed: boolean): Todo[] {
  return todos.filter((todo) => todo.completed === completed);
}

export function search(term: string): Todo[] {
  if (!term) return [];

  const lowerTerm = term.toLowerCase();
  return todos.filter((todo) => todo.title.toLowerCase().includes(lowerTerm))
}