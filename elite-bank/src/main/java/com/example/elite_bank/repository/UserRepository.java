package com.example.elite_bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.elite_bank.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}