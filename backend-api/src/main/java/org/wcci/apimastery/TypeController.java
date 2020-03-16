package org.wcci.apimastery;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
@RestController
public class TypeController {

    private TypeRepository typeRepository;

    public TypeController(TypeRepository typeRepository) {

        this.typeRepository = typeRepository;
    }
 @RequestMapping("/types")
    public Collection<Type> retrieveTypes() {
        return (Collection<Type>) typeRepository.findAll();
    }
}
