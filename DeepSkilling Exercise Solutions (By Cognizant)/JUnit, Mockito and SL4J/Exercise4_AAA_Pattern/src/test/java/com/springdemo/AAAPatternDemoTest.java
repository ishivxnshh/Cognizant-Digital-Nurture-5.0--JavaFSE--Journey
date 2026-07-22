package com.springdemo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AAAPatternDemoTest {

    private int initialValue;

    @BeforeEach
    public void setUp() {
        System.out.println("Initializing test state...");
        initialValue = 10;
    }

    @AfterEach
    public void tearDown() {
        System.out.println("Test finished, resetting state...");
    }

    @Test
    public void testAddition() {
        // Arrange
        int firstAddend  = initialValue;
        int secondAddend = 5;

        // Act
        int sum = firstAddend + secondAddend;

        // Assert
        assertEquals(15, sum);
    }

    @Test
    public void testMultiplication() {
        // Arrange
        int factor     = initialValue;
        int multiplier = 3;

        // Act
        int product = factor * multiplier;

        // Assert
        assertEquals(30, product);
    }
}
