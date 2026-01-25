import { TodoForm, TodoItem } from "./components";
import { useTodo } from "./contexts";
import "./App.css";

function App() {
  const { todos, loading } = useTodo();

  return (
    <div className="bg-[rgb(49,77,119)] min-h-screen py-8 rounded-lg">
      <div className="bg-[rgb(49,77,119)] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Todo List App
        </h1>

        <div className="mb-4">
          <TodoForm />
        </div>

        {loading && <p className="text-center">Loading...</p>}

        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo._id} className="w-full mb-2">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
