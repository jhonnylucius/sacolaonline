package com.sacolaonline.sacolaonline.service;

import com.sacolaonline.model.Reward;
import com.sacolaonline.repository.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardService {

    @Autowired
    private RewardRepository rewardRepository;

    public List<Reward> findAllRewards() {
        return rewardRepository.findAll();
    }

    public Reward saveReward(Reward reward) {
        return rewardRepository.save(reward);
    }

    public void deleteReward(Long id) {
        rewardRepository.deleteById(id);
    }
}