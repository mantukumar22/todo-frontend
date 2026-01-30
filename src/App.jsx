import { TodoForm, TodoItem } from "./components";
import { useTodo } from "./contexts";
import "./App.css";

function App() {
  const { todos, loading, setSearchTerm } = useTodo();

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
        <input
          type="text"
          placeholder={`Search todos... ${<ion-icon name="search-outline"></ion-icon>}`}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 p-2 rounded"
        />
        {todos.length === 0 && (
          <p className="text-center text-gray-400">No todos found</p>
        )}

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
