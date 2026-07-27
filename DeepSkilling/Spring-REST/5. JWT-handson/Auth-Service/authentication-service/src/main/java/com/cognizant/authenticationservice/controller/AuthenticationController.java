package com.cognizant.authenticationservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authenticationservice.model.AuthenticationResponse;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate() {

        return new AuthenticationResponse("JWT Token will be generated here");
    }
}
