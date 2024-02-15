package com.backend.services;

import com.backend.models.ToDo;
import com.backend.repository.ToDoRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ToDoService implements IToDoService {

    private final ToDoRepository toDoRepository;
    private final MongoTemplate mongoTemplate;

    @Override
    public List<ToDo> getAllToDo() {
        return toDoRepository.findAll();
    }

    @Override
    public String saveToDo(ToDo to_do) {
        return toDoRepository.save(to_do).getId();
    }

    @Override
    public Optional<ToDo> getToDoById(String id) {
        return Optional.empty();
    }

    @Override
    public Optional<ToDo> getToDoByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<ToDo> updateToDo(String id, ToDo partialEmployee) {
        return Optional.empty();
    }

    @Override
    public void deleteToDo(String id) {

    }

    @Override
    public List<ToDo> searchToDo(String query) {
        return null;
    }
}
