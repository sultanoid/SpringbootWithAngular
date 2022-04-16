package com.celloscope.springbootstarter;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ResponseController {

    @GetMapping(value = "/response")
    public String getResponse()
    {
        return "Hello from Spring";
    }

    @GetMapping("/response/{name}")
    public String getUser(@PathVariable String name) {
        return "Hello Celloscope from "+name;
    }
}
