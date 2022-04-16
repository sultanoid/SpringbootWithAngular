package com.celloscope.springbootdatabase.application.port.out;

import com.celloscope.springbootdatabase.domain.Customer;

import java.util.Optional;

public interface CustomerPersistencePort  {
    Optional<Customer> get(String customerId);
    String save(Customer customer);
}
