package com.sacolaonline.sacolaonline.repository;

import com.sacolaonline.sacolaonline.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}

