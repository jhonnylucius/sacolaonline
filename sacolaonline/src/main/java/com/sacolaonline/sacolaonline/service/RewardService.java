package com.sacolaonline.sacolaonline.service;

import com.sacolaonline.sacolaonline.model.Reward;
import com.sacolaonline.sacolaonline.repository.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardService {

    @Autowired
    private RewardRepository rewardRepository;

    public List<Reward> getAllRewards() {
        return rewardRepository.findAll();
    }

    public Reward createReward(Reward reward) {
        return rewardRepository.save(reward);
    }

    public Reward getRewardById(Long id) {
        return rewardRepository.findById(id).orElse(null); // Utiliza o método findById do repository
    }

    public void deleteReward(Long id) {
        rewardRepository.deleteById(id);
    }
}