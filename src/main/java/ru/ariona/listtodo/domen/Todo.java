package ru.ariona.listtodo.domen;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@ToString
public class Todo {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private boolean done;

}
