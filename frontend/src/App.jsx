import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";

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
    <>
      <section>
        <div className="">
          <Header getToDoList={getToDoList}></Header>
          <div className="grid grid-cols-4 list-cards m-4">
            {toDoList.map((toDo) => (
              <TaskCard
                toDo={toDo}
                key={toDo.id}
                getToDoList={getToDoList}
              ></TaskCard>
            ))}
          </div>
        </div>
      </section>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
