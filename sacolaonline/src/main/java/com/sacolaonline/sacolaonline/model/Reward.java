package com.sacolaonline.sacolaonline.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data  // Gera automaticamente getters, setters, equals, hashcode e toString
@Entity
@Table(name = "rewards")
public class Reward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "reward_description", nullable = false)
    private String rewardDescription;

    @Column(name = "received_at")
    private LocalDateTime receivedAt;
}
