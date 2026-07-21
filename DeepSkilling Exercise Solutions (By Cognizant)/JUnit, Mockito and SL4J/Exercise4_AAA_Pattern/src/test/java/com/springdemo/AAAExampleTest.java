package com.springdemo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AAAExampleTest {

    private int baseNumber;

    @BeforeEach
    public void setUp() {
        System.out.println("Setting up...");
        baseNumber = 10;
    }

    @AfterEach
    public void tearDown() {
        System.out.println("Cleaning up...");
    }

    @Test
    public void testAddition() {
        // Arrange
        int firstAddend = baseNumber;
        int secondAddend = 5;

        // Act
        int sum = firstAddend + secondAddend;

        // Assert
        assertEquals(15, sum);
    }
}