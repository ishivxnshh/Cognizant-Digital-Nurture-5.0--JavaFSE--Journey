package com.springdemo;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorFunctionsTest {

    private final Calculator calc = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(6, calc.subtract(10, 4));
    }

    @Test
    public void testMultiply() {
        assertEquals(12, calc.multiply(3, 4));
    }
}
