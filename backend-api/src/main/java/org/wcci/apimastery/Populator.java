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

        Animal testAnimal = new Animal("lion",70.3,20,testType1,"For all of their roaring, growling, and ferociousness, lions are family animals and truly social in their own communities. They usually live in groups of 15 or more animals called prides. Lion prides can be as small as 3 or as big as 40 animals. In a ","meat","https://res.cloudinary.com/de1yfkbh6/image/upload/v1585858438/lion_wjblab.jpg");
        animalRepository.save(testAnimal);
        Animal testAnimal2 = new Animal("zebra",73.3,22,testType2,"Zebras are several species of African equids (horse family) united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds."

                ,"Grass","https://res.cloudinary.com/de1yfkbh6/image/upload/v1585873652/zebra-2283914_640_lcdu4q.jpg");
        animalRepository.save(testAnimal2);
        Animal testAnimal3 = new Animal("Bufalo",76.3,27,testType2,"BafaroDescription","meet2","https://res.cloudinary.com/de1yfkbh6/image/upload/v1585873651/african-buffalo-4866226_640_cxq53i.jpg");
        animalRepository.save(testAnimal3);
        Animal testAnimal4 = new Animal("snake",30,3,testType3,"snakeDescription","all","https://res.cloudinary.com/de1yfkbh6/image/upload/v1585873652/snake-1758994_640_sdifsf.jpg");
        animalRepository.save(testAnimal4);

    }
}
