package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.*;


public interface NutritionPlanRepository extends JpaRepository<NutritionPlan, Long> {}