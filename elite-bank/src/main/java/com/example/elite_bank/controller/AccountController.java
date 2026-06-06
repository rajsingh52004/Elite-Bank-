package com.example.elite_bank.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.elite_bank.dto.TransferRequest;
import com.example.elite_bank.entity.Account;
import com.example.elite_bank.repository.AccountRepository;
@CrossOrigin(origins = "*") // Allow requests from React frontend
@RestController
@RequestMapping("/accounts")
// Allow requests from React frontend
public class AccountController {

    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    // Create Account
    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    // Get All Accounts
    @GetMapping
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    // Deposit
    @PutMapping("/deposit/{id}")
    public Account depositMoney(@PathVariable Long id,
            @RequestParam Double amount) {

        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account Not Found"));

        account.setBalance(account.getBalance() + amount);

        return accountRepository.save(account);
    }

    // Withdraw
    @PutMapping("/withdraw/{id}")
    public Account withdrawMoney(@PathVariable Long id,
            @RequestParam Double amount) {

        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account Not Found"));

        if (account.getBalance() < amount) {
            throw new RuntimeException("Insufficient Balance");
        }

        account.setBalance(account.getBalance() - amount);

        return accountRepository.save(account);
    }

    // Transfer
    @PostMapping("/transfer")
    public String transferMoney(@RequestBody TransferRequest request) {

        Account fromAccount = accountRepository
                .findByAccountNumber(request.getFromAccount())
                .orElseThrow(() -> new RuntimeException("Sender Account Not Found"));

        Account toAccount = accountRepository
                .findByAccountNumber(request.getToAccount())
                .orElseThrow(() -> new RuntimeException("Receiver Account Not Found"));

        if (fromAccount.getBalance() < request.getAmount()) {
            throw new RuntimeException("Insufficient Balance");
        }

        fromAccount.setBalance(
                fromAccount.getBalance() - request.getAmount());

        toAccount.setBalance(
                toAccount.getBalance() + request.getAmount());

        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        return "Transfer Successful";
    }
}