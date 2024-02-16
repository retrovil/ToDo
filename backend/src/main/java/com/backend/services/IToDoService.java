package com.backend.services;

import com.backend.models.ToDo;

import java.util.List;
import java.util.Optional;

public interface IToDoService {

    public List<ToDo> getAllToDo();
    public String saveToDo(ToDo to_do);
    Optional<ToDo> getToDoById(String id);
    Optional<ToDo> getToDoByEmail(String email);
    Optional<ToDo> updateToDo(String id, ToDo todo);
    Optional<ToDo> updateState(String id);
    void deleteToDo(String id);
    public List<ToDo> searchToDo(String query);

}
