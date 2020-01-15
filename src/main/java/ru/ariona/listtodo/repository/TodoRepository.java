package ru.ariona.listtodo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ariona.listtodo.domen.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
