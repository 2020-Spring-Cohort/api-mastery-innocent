package org.wcci.apimastery;

import org.hibernate.persister.entity.Loadable;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class AnimalController {
    private AnimalRepository animalRepository;


    public AnimalController (AnimalRepository animalRepository){
        this.animalRepository = animalRepository;
    }

    @GetMapping("/animals")
    public Collection<Animal> retrieveAnimal(){
        return (Collection<Animal>) animalRepository.findAll();}

    @GetMapping ("/animals/{id}")
    public Animal getSingleAnimal(@PathVariable Long id){
        return animalRepository.findById(id).get();
    }

    @PostMapping ("/animals")
    public Animal saveAnimal(@RequestBody Animal animal){
        return animalRepository.save(animal);
    }

    @DeleteMapping ("/animals/{id}")
    public void deleteAnimal(@PathVariable Long id){
        animalRepository.deleteById(id);
    }

    @PutMapping("/animals/{id}")
    public Animal updateAnimal(@RequestBody Animal animal, @PathVariable Long id){
        animal.setId(id);
        return animalRepository.save(animal);
    }


}
