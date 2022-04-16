package com.celloscope.springbootdatabase.application.port.in;

import com.celloscope.springbootdatabase.domain.Customer;

import java.util.Optional;

public interface CustomerUseCase {
    Optional<Customer> getCustomer(String customerId);
    String saveCustomer(Customer customer);
}
