import React, { useState } from "react";
import {TaskFormPopUp} from "./TaskFormPopUp";
import { Button } from "flowbite-react";
import './Header.css'

export const Header = ({getToDoList}) => {
  const [isOpenFormModal, setIsOpenFormModal] = useState(false);

  const handleOpenFormModal = () => {
    setIsOpenFormModal(true);
  };

  return (
    <>
      <div className="flex justify-between m-2 border-black-bottom">
        <h1 className="font-bold text-3xl">List of Tasks</h1>
        <Button
          className="bg-blue-600 border rounded text-white hover:bg-blue-800"
          onClick={handleOpenFormModal}
        >
          Add Task
        </Button>
      </div>
      {isOpenFormModal && <TaskFormPopUp isOpenFormModal={isOpenFormModal} setIsOpenFormModal={setIsOpenFormModal} getToDoList={getToDoList}/>}
    </>
  );
}
