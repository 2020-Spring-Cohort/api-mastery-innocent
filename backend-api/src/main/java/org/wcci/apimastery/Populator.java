package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    private TypeRepository typeRepository;
    @Autowired
    private AnimalRepository animalRepository;

    @Override
    public void run(String... args) throws Exception {

        Type testType1 = new Type("Mammals", "description");
        typeRepository.save (testType1);
        Type testType2 = new Type("Aquatic", "describe");
        typeRepository.save(testType2);

        Type testType3 = new Type("Reptiles", "description 3");
        typeRepository.save (testType3);
        Type testType4 = new Type("Others", "description Other");
        typeRepository.save (testType4);

        Animal testAnimal = new Animal("lion",70.3,20,testType1,"lionDescription","meat","url");
        animalRepository.save(testAnimal);
        Animal testAnimal2 = new Animal("zebra",73.3,22,testType2,"ZebraDescription","Grass","url1");
        animalRepository.save(testAnimal2);
        Animal testAnimal3 = new Animal("Bufalo",76.3,27,testType2,"BafaroDescription","meet2","url2");
        animalRepository.save(testAnimal3);
        Animal testAnimal4 = new Animal("snake",30,3,testType3,"snakeDescription","all","url6");
        animalRepository.save(testAnimal4);

    }
}
