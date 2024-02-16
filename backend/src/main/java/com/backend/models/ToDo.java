package com.backend.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "to-do")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ToDo {
    @Id
    @Field("_id")
    private String id;
    private String title;
    private String description;
    private String date;
    private int completed;

    public ToDo(String id, String title, String description, String date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.completed = 0;
    }

}
