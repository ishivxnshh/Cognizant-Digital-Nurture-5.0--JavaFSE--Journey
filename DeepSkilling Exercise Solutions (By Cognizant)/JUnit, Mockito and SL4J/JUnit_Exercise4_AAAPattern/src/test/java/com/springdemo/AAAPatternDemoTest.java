package com.springdemo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AAAPatternDemoTest {

    private int baseValue;

    @BeforeEach
    void setUp() {
        baseValue = 10;
    }

    @AfterEach
    void tearDown() {
        System.out.println("test done");
    }

    @Test
    void testAddition() {
        // Arrange
        int num = baseValue;
        int toAdd = 5;

        // Act
        int result = num + toAdd;

        // Assert
        assertEquals(15, result);
    }

    @Test
    void testMultiplication() {
        int result = baseValue * 3;
        assertEquals(30, result);
    }
}
