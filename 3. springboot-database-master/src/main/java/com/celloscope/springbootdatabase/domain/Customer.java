package com.celloscope.springbootdatabase.domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "customers" )
public class Customer implements Serializable {
    @Column(name="name")
    private String name;

    //@GeneratedValue(strategy=GenerationType.AUTO)

    @Column(name="phone")
    private String phone;
    @Id
    @Column(name="id", unique = true, nullable = false)
    private String id;

    public Customer(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }

    public Customer() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public void setId(String id) {
        this.id = id;
    }

    @Id
    public String getId() {
        return id;
    }
}
