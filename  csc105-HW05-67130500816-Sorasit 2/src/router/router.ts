import { Hono } from 'hono';
import * as TodoController from '../control/control.js';
import {
	validateIdParam,
	validateCreateTodo,
	validateUpdateTodo,
	validatePatchTodo,
} from '../middleware/middlewere.js';

const todoRoutes = new Hono();

todoRoutes.get('/', TodoController.getTodos);
todoRoutes.get('/search', TodoController.searchTodos);
todoRoutes.get('/:id', validateIdParam, TodoController.getTodo);
todoRoutes.post('/', validateCreateTodo, TodoController.createTodo);
todoRoutes.put('/:id', validateIdParam, validateUpdateTodo, TodoController.updateTodo);
todoRoutes.patch('/:id', validateIdParam, validatePatchTodo, TodoController.patchTodo);
todoRoutes.delete('/:id', validateIdParam, TodoController.deleteTodo);

export default todoRoutes;