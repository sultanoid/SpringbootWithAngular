package com.celloscope.springbootdatabase.adapter.out.persistence;

import com.celloscope.springbootdatabase.application.port.out.CustomerPersistencePort;
import com.celloscope.springbootdatabase.domain.Customer;
import com.celloscope.springbootdatabase.respository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.UUID;

@Component
public class CustomerPersistenceAdapter implements CustomerPersistencePort {
    //TODO: Create CustomerEntity
    //TODO: Create CustomerRepository

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Optional<Customer> get(String customerId) {
        //TODO: Write your code here
        return customerRepository.findById(customerId);

    }

    @Override
    public String save(Customer customer) {
        //TODO: Write your code here
        customer.setId(UUID.randomUUID().toString());
        Customer newCustomer =  customerRepository.save(customer);
        return newCustomer.getId();
    }
}
