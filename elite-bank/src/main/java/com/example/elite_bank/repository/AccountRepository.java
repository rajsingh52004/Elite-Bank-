package com.example.elite_bank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.elite_bank.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByAccountNumber(String accountNumber);

}