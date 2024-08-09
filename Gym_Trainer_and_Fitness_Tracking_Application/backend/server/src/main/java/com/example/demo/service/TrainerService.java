package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Trainer;
import com.example.demo.model.User;
import com.example.demo.repository.TrainerRepository;
import com.example.demo.repository.UserRepository;

@Service
public class TrainerService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TrainerRepository trainerRepository;

    public List<User> getUsersByTrainer(Long trainerId) {
        return userRepository.findByTrainerId(trainerId);
    }

    //save trainer
    public Trainer createTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

}
