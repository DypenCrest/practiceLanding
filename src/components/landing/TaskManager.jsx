import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTaskStore } from "../../store/store";

const TaskManager = () => {
  const [input, setInput] = useState("");
  const { tasks, addTask, completeTask, deleteTask } = useTaskStore(); // zustand bata

  
//suruma i did not use zustand and used useState and useEffect to manage tasks with local storage until i saw that zustand statemanegement needs to be used.


  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks)); //if tasks change vayo vane tasks haru local storage ma save garne
  // }, [tasks]);

  const handleAddTask = () => {
    if (!input.trim()) {
      //trim for space nalina
      alert("Paili Task add garnus 😉 ");
      return;
    }

    const newTask = {
      id: Date.now(), //aileko date time bata unique id banaune
      text: input.trim(),
      completed: false,
    };
    addTask(newTask);
    // const updatedTasks = [...tasks, newTask];
    // setTasks(updatedTasks); //paila ko tasks ma new task add garera local ma saved
    // // localStorage.setItem("tasks", JSON.stringify(updatedTasks)); doing this i had to repeqt in all
    setInput(""); //reset field
    alert("Task successfully add vayo! ✅");
  };

  const handleDeleteTask = (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${title}?`
    );
    if (confirmDelete) {
      deleteTask(id);
      alert("Task delete vayo 😢");
    }
  };

  const handleCompleteTask = (id) => {
    completeTask(id);
  };
  console.log(tasks, "tasks");
  return (
    <div className="min-h-dvh bg-[#f4f3ff] flex flex-col items-center justify-center px-4 py-10 mx-4 md:mx-[80px]">
      <h1 className="text-4xl font-bold text-[#4532FC] mb-4">Task Manager</h1>
      <p className="text-gray-600 mb-8">Your daily to do list</p>

      <div className="bg-white w-full max-w-3xl p-4 md:p-12 rounded-2xl shadow-md space-y-4">
        {tasks?.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-[79%] ">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
                className="w-5 h-5 rounded-full cursor-pointer !checked:bg-[#4532FC] " //css checked walal not working
              />
              <span
                className={`${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                } break-all w-full`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id, task.text)}
              className="text-red-500 border md:space-x-2 flex border-red-300 px-3 !py-1 !rounded-md hover:bg-red-100 text-sm"
            >
              <X className="w-4 h-4" />{" "}
              <span className="hidden md:block">Delete</span>
            </button>
          </div>
        ))}

        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleAddTask}
          className="bg-indigo-600 w-full md:w-fit text-white !px-12 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
