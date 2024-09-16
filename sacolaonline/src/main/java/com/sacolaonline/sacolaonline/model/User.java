package com.sacolaonline.sacolaonline.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    // Define a relação bidirecional com Reward
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true) // Remove o 'mappedBy'
    private List<Reward> rewards = new ArrayList<>(); // Inicializa a lista
}