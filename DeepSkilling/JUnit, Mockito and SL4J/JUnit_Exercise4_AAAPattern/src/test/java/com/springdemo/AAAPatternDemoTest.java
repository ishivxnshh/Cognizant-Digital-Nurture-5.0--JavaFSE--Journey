package com.springdemo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAAPatternDemoTest {

    private int baseValue;

    @Before
    public void setUp() {
        baseValue = 10;
    }

    @After
    public void tearDown() {
        System.out.println("test done");
    }

    @Test
    public void testAddition() {
        // Arrange
        int num = baseValue;
        int toAdd = 5;

        // Act
        int result = num + toAdd;

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        int result = baseValue * 3;
        assertEquals(30, result);
    }
}
