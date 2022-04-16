package com.celloscope.springbootdatabase.application.service;

import com.celloscope.springbootdatabase.application.port.in.CustomerUseCase;
import com.celloscope.springbootdatabase.application.port.out.CustomerPersistencePort;
import com.celloscope.springbootdatabase.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService implements CustomerUseCase {

    private final CustomerPersistencePort customerPersistencePort;

    @Autowired
    public CustomerService(CustomerPersistencePort customerPersistencePort) {
        this.customerPersistencePort = customerPersistencePort;
    }

    @Override
    public Optional<Customer> getCustomer(String customerId) {
        return customerPersistencePort.get(customerId);
    }

    @Override
    public String saveCustomer(Customer customer) {
        return customerPersistencePort.save(customer);
    }
}
