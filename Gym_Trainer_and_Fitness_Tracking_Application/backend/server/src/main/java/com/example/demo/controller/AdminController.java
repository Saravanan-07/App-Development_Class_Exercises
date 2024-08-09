package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.model.ExerciseVideo;
import com.example.demo.model.NutritionPlan;
import com.example.demo.model.Trainer;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/exercises")
    public ResponseEntity<ExerciseVideo> addExercise(@RequestBody ExerciseVideo exercise) {
        return new ResponseEntity<>(adminService.addExercise(exercise), HttpStatus.CREATED);
    }

    @DeleteMapping("/exercises/{exerciseId}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long exerciseId) {
        adminService.deleteExercise(exerciseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
        Admin savedAdmin = adminService.createAdmin(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAdmin);
    }

    @PutMapping("/users")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return new ResponseEntity<>(adminService.updateUser(user), HttpStatus.OK);
    }


    @PutMapping("/trainers")
    public ResponseEntity<Trainer> updateTrainer(@RequestBody Trainer trainer) {
        return new ResponseEntity<>(adminService.updateTrainer(trainer), HttpStatus.OK);
    }

    @PostMapping("/nutritionPlans")
    public ResponseEntity<NutritionPlan> addNutritionPlan(@RequestBody NutritionPlan nutritionPlan) {
        return new ResponseEntity<>(adminService.addNutritionPlan(nutritionPlan), HttpStatus.CREATED);
    }

    @DeleteMapping("/nutritionPlans/{nutritionPlanId}")
    public ResponseEntity<Void> deleteNutritionPlan(@PathVariable Long nutritionPlanId) {
        adminService.deleteNutritionPlan(nutritionPlanId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
