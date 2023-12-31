package com.proyectointegrador.digitalbooking.repository;

import com.proyectointegrador.digitalbooking.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Long> {
}
