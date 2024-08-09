package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.WorkoutPlan;
import com.example.demo.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }


    //add workout plan for user
    @PostMapping("/{userId}/workoutPlans")
    public WorkoutPlan addWorkoutPlanToUser(@PathVariable Long userId, @RequestBody WorkoutPlan workoutPlan) {
        return userService.addWorkoutPlanToUser(userId, workoutPlan);
    }

    //list the workout plans of user
    @GetMapping("/{userId}/workoutPlans")
    public List<WorkoutPlan> getWorkoutPlansForUser(@PathVariable Long userId) {
        return userService.getWorkoutPlansForUser(userId);
    }

    //deleting a workout plan
     @DeleteMapping("/{userId}/workoutPlans/{workoutPlanId}")
    public ResponseEntity<Void> deleteWorkoutPlanForUser(@PathVariable Long userId, @PathVariable Long workoutPlanId) {
        userService.deleteWorkoutPlanForUser(userId, workoutPlanId);
        return ResponseEntity.noContent().build();
    }

    //choosing a trainer by user
    @PutMapping("/{userId}/chooseTrainer/{trainerId}")
    public ResponseEntity<User> chooseTrainer(@PathVariable Long userId, @PathVariable Long trainerId) {
        User updatedUser = userService.chooseTrainer(userId, trainerId);
        return ResponseEntity.ok(updatedUser);
    }

    //unselect trainer by setting trainer id to null
    @PutMapping("/{userId}/unselectTrainer")
    public ResponseEntity<User> unselectTrainer(@PathVariable Long userId) {
        User updatedUser = userService.unselectTrainer(userId);
        return ResponseEntity.ok(updatedUser);
    }
}
