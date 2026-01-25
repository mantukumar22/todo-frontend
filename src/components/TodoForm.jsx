import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({
      title: todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Write Todo..."
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className='bg-green-500 px-4 py-1.5 rounded-r-lg hover:bg-green-700 duration-150'>Add</button>
    </form>
  );
}

export default TodoForm;
