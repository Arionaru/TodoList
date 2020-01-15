package ru.ariona.listtodo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.ariona.listtodo.domen.Todo;
import ru.ariona.listtodo.repository.TodoRepository;

import java.util.List;

@Slf4j
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/todos")
public class TodoController {
    private final TodoRepository repository;

    @Autowired
    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Todo> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Todo getOne(@PathVariable("id") Todo todo) {
        return todo;
    }

    @PostMapping
    public Todo save(@RequestBody Todo todo) {
        return repository.save(todo);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable("id") Todo todoFromDb, @RequestBody Todo todo) {
        BeanUtils.copyProperties(todo,todoFromDb,"id");
        return repository.save(todoFromDb);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Todo todo) {
        repository.delete(todo);
    }
}
