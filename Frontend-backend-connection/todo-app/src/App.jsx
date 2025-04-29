import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Axios } from "./utils/axiosInstance";
import { getTodoAPI } from "./api/getTodo";


function App() {
  const API_URL = "http://localhost:8000/todo";
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await getTodoAPI()
      setTodos(res.data);
      console.log(res); 
    } catch (err) {
      console.error("Error loading todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    try {
      await axios.post(`${API_URL}/add`, { name: newTodo, userId: 1 }); 
      setNewTodo(""); 
      fetchTodos(); 
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };


  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const changeStatus = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/success/${id}`);
      const updatedTodo = res.data.data;
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const editTodo = async (id, newTitle) => {
    try {
      await axios.patch(`${API_URL}/edit/${id}`, { name: newTitle });
      fetchTodos();
    } catch (err) {
      console.error("Error editing todo:", err);
    }
  };

  return (
    <div className="border border-gray-300 flex flex-col items-center p-10 min-h-screen ">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Todo List</h1>
      <div className="flex w-full max-w-md mb-6">
        <input
          className="flex-1 p-3 rounded-l-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-r-lg"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <input
              type="checkbox"
              checked={todo.success} 
              onChange={() => changeStatus(todo.id)}
              className="mr-4 w-5 h-4"
            />
            <input
              type="text"
              className={`flex-1 text-lg ${todo.success ? " text-green-500" : ""} focus:outline-none`}
              value={todo.name}
              onChange={(e) => editTodo(todo.id, e.target.value)}
            />
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-4 text-red-500 hover:text-red-700 text-xl"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
