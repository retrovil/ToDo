package com.backend.controllers;

import com.backend.models.ToDo;
import com.backend.services.ToDoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
