package org.wcci.apimastery;


import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collection;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


public class TypeControllerTest {

    TypeController underTest;
    TypeRepository typeRepository;
    AnimalRepository animalRepository;


    @Test
    public void retrievedTypeShouldReturnAListFromMockRepository() {
        typeRepository = mock(TypeRepository.class);
        underTest = new TypeController(typeRepository,animalRepository);
        Type testType = mock(Type.class);
        when(typeRepository.findAll()).thenReturn(Collections.singletonList(testType));

        Collection<Type> result = underTest.retrieveTypes();

        verify(typeRepository).findAll();

    }

    @Test
    public void retrievedTypeShouldReturnAListContainingMockType() {
        typeRepository = mock(TypeRepository.class);
        underTest = new TypeController(typeRepository,animalRepository);
        Type testType = mock(Type.class);
        when(typeRepository.findAll()).thenReturn(Collections.singletonList(testType));

        Collection<Type> result = underTest.retrieveTypes();
        assertThat(result).contains(testType);

    }

    @Test
    public void underTestWiredHasCorrectAnnotation() throws Exception {
        typeRepository = mock(TypeRepository.class);
        underTest = new TypeController(typeRepository,animalRepository);
        Type testType = new Type("testName","testDescription");
        when(typeRepository.findAll()).thenReturn(Collections.singletonList(testType));

        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/types"))
                .andExpect(status().isOk());
    }

}