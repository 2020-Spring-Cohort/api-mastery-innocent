package org.wcci.apimastery;


import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
public class TypeController {

    private TypeRepository typeRepository;

    public TypeController(TypeRepository typeRepository) {

        this.typeRepository = typeRepository;
    }

 @GetMapping("/types")
    public Collection<Type> retrieveTypes() {
        return (Collection<Type>) typeRepository.findAll();
    }

    @GetMapping("/types/{id}")
    public Type getSingleType(@PathVariable Long id){
        return typeRepository.findById(id).get();
    }
    @PostMapping("/types")
    public Type saveType(@RequestBody Type type){
        return typeRepository.save(type);
    }
    @DeleteMapping("/types/{id}")
    public void deleteType(@PathVariable Long id){
        typeRepository.deleteById(id);
    }

    @PutMapping("/types/{id}")
    public Type updateType(@RequestBody Type type, @PathVariable Long id){
        type.setId(id);
        return typeRepository.save(type);
    }
}
