package com.celloscope.springbootdatabase.respository;

import com.celloscope.springbootdatabase.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository  extends JpaRepository<Customer, String> {

    Optional<Customer> findById(String id);
    String findByNameAndPhone(String name, String phone);

}
