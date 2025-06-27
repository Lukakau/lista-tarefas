import Tasks from "../Tasks";
import AddTask from "../AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";


function TaskManager(){
     const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   // FAZER UMA REQUISIÇÃO PARA PEGAR AS TAREFAS
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // PEGAR OS DADOS QUE ELA RETORNA
  //     const data = await response.json();

  //     //ARMAZENAR AS TAREFAS NO ESTADO
  //     setTasks(data);
  //   }

  //   // SE QUISER, PODE CHAMAR UMA API
  //   // fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  return(
      <div className="relative bg-[url('file:///C:/Users/lucas.pires/Downloads/31a10524d3e0aecc926f62732fb7f9a3bb2239ee%20(1).png')] bg-cover h-screen bg-center flex justify-center p-6">
          <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Gerenciador de Tarefas
            </h1>
            <AddTask 
              onAddTask={onAddTask}
            />
            <Tasks 
              tasks = {tasks} 
              onTaskClick={onTaskClick} 
              onDeleteTask={onDeleteTask} 
            />
          </div> 
      </div>
  );
}

export default TaskManager;