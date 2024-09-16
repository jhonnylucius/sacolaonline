package com.sacolaonline.sacolaonline.controller;

import com.sacolaonline.model.Reward;
import com.sacolaonline.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rewards")
public class RewardController {

    @Autowired
    private RewardService rewardService;

    // Método GET para listar todas as recompensas
    @GetMapping
    public List<Reward> getAllRewards() {
        return rewardService.getAllRewards();
    }

    // Método POST para criar uma nova recompensa
    @PostMapping
    public Reward createReward(@RequestBody Reward reward) {
        return rewardService.createReward(reward);
    }

    // Método GET para buscar uma recompensa por ID
    @GetMapping("/{id}")
    public Reward getRewardById(@PathVariable Long id) {
        return rewardService.getRewardById(id);
    }
}