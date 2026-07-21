package com.springdemo;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testTwoNumbersAreAddedCorrectly() {
        Calculator calculator = new Calculator();
        int sum = calculator.add(2, 3);
        assertEquals(5, sum);
    }
}
