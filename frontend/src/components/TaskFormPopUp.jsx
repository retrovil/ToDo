import React, { useEffect } from "react";
import {
  Modal,
  Button,
  Label,
  TextInput,
  Textarea,
  Datepicker,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

  const onSubmit = async (data) => {
    try {
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
          //un toast o algo
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
      <Modal show={isOpenFormModal} onClose={() => setIsOpenFormModal(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            {toDo !== undefined ? "Update Task" : "Add Task"}
          </Modal.Header>
          <Modal.Body>
          <div className="space-y-6">
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                placeholder="Enter the Title"
                {...register("title")}
                required
              />
            </div>
            <div className="space-y-6">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <Textarea
                id="description"
                placeholder="Enter the description"
                {...register("description")}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <TextInput type="date" id="date" required {...register("date")} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="bg-blue-500">
              {toDo !== undefined ? "Update Task" : "Add Task"}
            </Button>
            <Button color="gray" onClick={() => setIsOpenFormModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
