package com.proyectointegrador.digitalbooking.repository;

import com.proyectointegrador.digitalbooking.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
