import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import TaskCard from './components/TaskCard';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const getToDoList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8085/api/v1/todolist/todos"
      );

      if (res.status === 200) {
        setToDoList(res.data);
      } else {
        throw new Error(`Status: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-between m-2">
        <h1 className="font-bold text-3xl">List of Tasks</h1>
        <button className="bg-blue-600 p-2 border rounded text-white hover:bg-blue-800">Add Task</button>
      </div>
      <hr className="text-black"></hr>
      <div className="grid grid-cols-4 m-5">

      {toDoList.map((toDo, index) => (
        <TaskCard 
        toDo={toDo}
        ></TaskCard>
        ))}
    </div>
        </div>
  );
}

export default App
