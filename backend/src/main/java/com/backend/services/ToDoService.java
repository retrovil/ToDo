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

        String id = "";
        System.out.println(toDoRepository.findAll().size() - 1);
        if(toDoRepository.findAll().get(toDoRepository.findAll().size() - 1) != null){
            id = String.valueOf(toDoRepository.findAll().get(toDoRepository.findAll().size() - 1).getId() + 1);
        }
        to_do.setId(id);
        return toDoRepository.save(to_do).getId().toString();
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
    public Optional<ToDo> updateToDo(String id, ToDo todo) {
        return Optional.ofNullable(toDoRepository.findById(id)
                .map(existingTodo -> {
                    existingTodo.setDescription(todo.getDescription());
                    existingTodo.setDate(todo.getDate());

                    System.out.println(existingTodo);
                    return toDoRepository.save(existingTodo);
                })
                .orElseThrow(() -> new IllegalStateException("Task with id " + id + " not found")));
    }

    @Override
    public Optional<ToDo> updateState(String id) {
        return Optional.ofNullable(toDoRepository.findById(id)
                .map(existingTodo -> {
                    existingTodo.setCompleted(1);


                    return toDoRepository.save(existingTodo);
                })
                .orElseThrow(() -> new IllegalStateException("Task with id " + id + " not found")));
    }

    @Override
    public void deleteToDo(String id) {
        toDoRepository.deleteById(id);
    }

    @Override
    public List<ToDo> searchToDo(String query) {
        return null;
    }
}
