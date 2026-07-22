package com.springdemo;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorFunctionsTest {

    private final Calculator calculator = new Calculator();

    @Test
    public void testTwoNumbersAreAddedCorrectly() {
        int sum = calculator.add(2, 3);
        assertEquals(5, sum);
    }

    @Test
    public void testSubtractionProducesCorrectDifference() {
        int difference = calculator.subtract(10, 4);
        assertEquals(6, difference);
    }

    @Test
    public void testMultiplicationProducesCorrectProduct() {
        int product = calculator.multiply(3, 4);
        assertEquals(12, product);
    }
}
