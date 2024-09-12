package com.sacolaonline.sacolaonline.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    @Column(unique = true)
    private String email;

    private String password;

    private String address;
    private String phone;
}

// Add more fields as needed for the User model (e.g., date of birth, gender, etc.)