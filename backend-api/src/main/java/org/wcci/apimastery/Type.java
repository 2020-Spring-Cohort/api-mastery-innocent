package org.wcci.apimastery;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;
@Entity
/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")*/
public class Type {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @OneToMany(mappedBy = "type")
    @JsonManagedReference
    private Collection<Animal> animals;

    public Type(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Type() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Collection<Animal> getAnimals() {
        return animals;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Type type = (Type) o;
        return Objects.equals(id, type.id) &&
                Objects.equals(name, type.name) &&
                Objects.equals(description, type.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}

