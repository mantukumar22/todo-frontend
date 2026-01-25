import React, { useState } from 'react'
import { useTodo } from '../contexts'


function TodoItem({ todo }) {

    const [isTodoEdittable, setIsTodoEdittable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.title);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo._id, { title: todoMsg });
        setIsTodoEdittable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo._id);
    };

return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black
            ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbedd]"}`}
        >
            <input type="checkbox"
                className='cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input type="text" 
                className={`w-full bg-transparent rounded-lg 
                ${todo.completed ? "line-through text-gray-500" : ""}`}

                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEdittable}
            />
            {/* Edit , save button */}

            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50
            hover:bg-gray-100 shrink-0 disabled:opacity-50'
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEdittable) {
                        editTodo();
                    } else setIsTodoEdittable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEdittable ? '✅' : '✏️'}
            </button>
            {/* Delete button */}
            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-50
            hover:bg-red-100 shrink-0'
                onClick={() => deleteTodo(todo._id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem