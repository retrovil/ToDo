package com.backend.controllers;

import com.backend.models.ToDo;
import com.backend.services.ToDoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/todolist")
@AllArgsConstructor
public class ToDoController{

    private final ToDoService todoService;

    @GetMapping("/todos")
    public List<ToDo> fetchAllToDos() {
        return todoService.getAllToDo();
    }

    @PostMapping("/add-todo")
    public String saveToDo(@RequestBody ToDo newToDO){
        return todoService.saveToDo(newToDO);
    }

    @PatchMapping("/change-state/{id}")
    public Optional changeState(@PathVariable String id){ return todoService.updateState(id);}

    @PatchMapping("/update-todo/{id}")
    public Optional updateTask(@PathVariable String id, @RequestBody ToDo todo){ return todoService.updateToDo(id, todo);}


    @DeleteMapping("/todo/{id}")
    public void deleteTask(@PathVariable String id){
        todoService.deleteToDo(id);
    }
}
