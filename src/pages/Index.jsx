import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">Todo App</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l" placeholder="Add a new task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <button className="bg-blue-500 text-white p-2 rounded-r" onClick={addTask}>
            <FaPlus />
          </button>
        </div>
        <ul className="bg-white shadow rounded p-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-200">
              <span>{task.text}</span>
              <button className="text-red-500" onClick={() => deleteTask(task.id)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
