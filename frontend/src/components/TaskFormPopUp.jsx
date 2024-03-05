import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";

export const TaskFormPopUp = ({
  toDo,
  isOpenFormModal,
  setIsOpenFormModal,
  getToDoList,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (toDo) {
      setValue("title", toDo.title);
      setValue("description", toDo.description);
      setValue("date", toDo.date);
    }
  }, []);

  const handleClose = () => {
    setIsOpenFormModal(false);
  };

  const onSubmit = async (data) => {
    try {

      console.log(data)
      if (toDo === undefined) {
        const res = await axios.post(
          "http://localhost:8085/api/v1/todolist/add-todo",
          data
        );
        console.log(res);

        if (res.status == 200) {
          setIsOpenFormModal(false);

          getToDoList();
          //un toast o algo
        } else {
          throw new Error();
        }
      } else {
        const id = toDo.id;

        const res = await axios.patch(
          `http://localhost:8085/api/v1/todolist/update-todo/${id}`,
          data
        );
        console.log(res);

        if (res.status == 200) {
          setIsOpenFormModal(false);

          getToDoList();
          toast.success("The task was completed");
        } else {
          throw new Error();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal
        open={isOpenFormModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 600,
            height: 500,
            backgroundColor: "white",
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 1,
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-75">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {toDo === undefined ? "Create new Task" : "Update the Task"}
            </Typography>
            <div className="w-96 m-4">
              <label
                for="hs-trailing-icon"
                class="block text-lg font-medium mb-2 dark:text-white"
              >
                Title
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="hs-trailing-icon"
                  name="hs-trailing-icon"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter the title"
                  {...register("title")}
                />
              </div>
            </div>
            <div className="w-96 m-4">
              <label
                for="hs-trailing-icon"
                class="block text-lg font-medium mb-2 dark:text-white "
              >
                Description
              </label>
              <div class="relative">
                <textarea
                  type="text"
                  id="hs-trailing-icon"
                  name="hs-trailing-icon"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter the description"
                  {...register("description")}
                />
              </div>
            </div>
            <div className="w-96 m-4">
              <label
                for="hs-trailing-icon"
                class="block text-lg font-medium mb-2 dark:text-white"
              >
                Date
              </label>
              <div class="relative">
                <input
                  type="date"
                  id="hs-trailing-icon"
                  name="hs-trailing-icon"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter the date"
                  {...register("date")}
                />
              </div>
            </div>
            <button onClick={handleClose} className="bg-gray-500 hover:bg-gray-700 mr-3 text-white py-2 px-4 rounded">Close</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">{toDo === undefined ? "Create Task" : "Update Task"}</button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
