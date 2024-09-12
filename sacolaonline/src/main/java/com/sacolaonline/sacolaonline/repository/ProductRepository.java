package com.sacolaonline.sacolaonline.repository;

import com.sacolaonline.sacolaonline.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
