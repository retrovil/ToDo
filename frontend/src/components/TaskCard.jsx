import axios from "axios";
import React, { useState } from "react";
import { TaskFormPopUp } from "./TaskFormPopUp";
import "./TaskCard.css";
import toast from "react-hot-toast";

export const TaskCard = ({ toDo, getToDoList }) => {
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);

  const handleOpenFormModal = () => {
    setIsOpenFormModal(true);
  };

  const handleChangeStateComplete = async () => {
    try {
      console.log(toDo);
      const _id = toDo.id;

      const res = await axios.patch(
        `http://localhost:8085/api/v1/todolist/change-state/${_id}`
      );

      if (res.status === 200) {
        getToDoList();
        toast.success("The task was completed");
      } else {
        toast.error("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteTask = async () => {
    try {
      console.log(toDo);
      const _id = toDo.id;

      const res = await axios.delete(
        `http://localhost:8085/api/v1/todolist/todo/${_id}`
      );

      if (res.status === 200) {
        getToDoList();
        toast.success("The task was completed");
      } else {
        toast.error("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <div className="card-wrap">
        <div
          className={`card-header + ${toDo.completed === 1 ? "completed" : "incompleted"}`}
        >
          <h1 className="card-title">{toDo.title}</h1>
        </div>
        <div className="card-content">
          <h1 className="card-text">{toDo.description}</h1>
          <p className="card-date">Date: {toDo.date}</p>
        </div>
        <div class="card-footer">
          <button
            onClick={handleOpenFormModal}
            className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Update
          </button>
          <button
            onClick={handleDeleteTask}
            className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Delete
          </button>
          {toDo.completed === 0 ? (
            <button
              onClick={handleChangeStateComplete}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Complete
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <TaskFormPopUp
        toDo={toDo}
        isOpenFormModal={isOpenFormModal}
        setIsOpenFormModal={setIsOpenFormModal}
        getToDoList={getToDoList}
      />
    </div>
  );
};
