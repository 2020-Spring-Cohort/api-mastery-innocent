package org.wcci.apimastery;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {

    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private TypeRepository typeRepository;

    @Autowired
    private EntityManager entityManager;

     @Test

      public void tyepeShouldHaveManyAnimals(){
         Type testType1 = new Type("Mammals", "description");
         typeRepository.save (testType1);
         Type testType2 = new Type("Aquatic", "describe");
         typeRepository.save(testType2);
         Animal testAnimal = new Animal("lion",70.3,20,testType1,"lionDescription","meet","url");
         animalRepository.save(testAnimal);
         Animal testAnimal2 = new Animal("zebra",73.3,22,testType2,"ZebraDescription","meet1","url1");
         animalRepository.save(testAnimal2);
         Animal testAnimal3 = new Animal("Bafaro",76.3,27,testType2,"BafaroDescription","meet2","url2");
         animalRepository.save(testAnimal3);
          entityManager.flush();
          entityManager.clear();
          Type retrieveType = typeRepository.findById(testType2.getId()).get();
         assertThat(retrieveType.getAnimals()).contains(testAnimal2,testAnimal3);


     }














}



