package com.sacolaonline.sacolaonline.repository;

import com.sacolaonline.sacolaonline.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
