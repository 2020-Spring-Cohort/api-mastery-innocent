package org.wcci.apimastery;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Objects;
@Entity

public class Animal {


    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private double weight;
    private int age;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Type type;
    @Column(length=900)
    private  String description;
    private String diet;
    private String pictureUrl;

    public Animal(String name, double weight, int age, Type type, String description, String diet, String pictureUrl) {
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.type = type;
        this.description = description;
        this.diet = diet;
        this.pictureUrl = pictureUrl;
    }

    public Animal() {
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getWeight() {
        return weight;
    }

    public int getAge() {
        return age;
    }

    public Type getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public String getDiet() {
        return diet;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return Double.compare(animal.weight, weight) == 0 &&
                age == animal.age &&
                Objects.equals(id, animal.id) &&
                Objects.equals(name, animal.name) &&
                Objects.equals(type, animal.type) &&
                Objects.equals(description, animal.description) &&
                Objects.equals(diet, animal.diet) &&
                Objects.equals(pictureUrl, animal.pictureUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, weight, age, type, description, diet, pictureUrl);
    }
}
