import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.RENDER_URL;

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setTodos(res.data.todos || []);
    } catch (err) {
      console.error("Fetch error", err);
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (data) => {
    await axios.post(API_URL, data);
    fetchTodos();
  };

  const updateTodo = async (id, data) => {
    await axios.put(`${API_URL}/${id}`, data);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;

    await axios.put(`${API_URL}/${id}`, {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
