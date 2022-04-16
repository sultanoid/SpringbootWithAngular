package com.celloscope.springbootdatabase.adapter.in.web.controllers;

import com.celloscope.springbootdatabase.application.port.in.CustomerUseCase;
import com.celloscope.springbootdatabase.application.service.CustomerService;
import com.celloscope.springbootdatabase.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CustomerController {

    private final CustomerUseCase customerUseCase;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerUseCase = customerService;
    }




    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> findCustomer(@PathVariable String id){
        Optional<Customer> customer = customerUseCase.getCustomer(id);
        if (customer != null) return ResponseEntity.ok(customer.get());
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/customers")
    public ResponseEntity<String> saveCustomer(@RequestBody Customer customer){
        String customerId = customerUseCase.saveCustomer(customer);
        if (customerId != null && !customerId.equals("")) return ResponseEntity.ok(customerId);
        return ResponseEntity.badRequest().build();
    }
}
