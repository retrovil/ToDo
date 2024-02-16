import axios from "axios";
import React, { useState } from "react";
import { TaskFormPopUp } from "./TaskFormPopUp";
import './TaskCard.css';

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
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <div className="max-w-sm p-6 m-4 background border-black rounded-lg text-center">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            {toDo.title}
          </h5>
        </a>
        <hr ></hr>
        <p className="mb-3 font-semibold text-black dark:text-gray-400">
          {toDo.description}
        </p>
        <p className="mb-3 font-semibold text-black dark:text-gray-400">
          Date: {toDo.date}
        </p>
        <p
          className={`mb-3 font-semibold ${
            toDo.completed === 1 ? "text-green-600" : "text-red-600"
          } dark:text-gray-400 `}
        >
          {toDo.completed === 1 ? "Completed" : "To Complete"}
        </p>
        <div>
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
